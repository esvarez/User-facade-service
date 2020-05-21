package dev.ericksuarez.user.facade.service.client;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.ericksuarez.user.facade.service.error.UnauthorizedException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
public abstract class HttpClientBase {

    private final HttpClient httpClient;

    private final ObjectMapper objectMapper;

    @Autowired
    public HttpClientBase(HttpClient httpClient, ObjectMapper objectMapper) {
        this.httpClient = httpClient;
        this.objectMapper = objectMapper;
    }

    protected <T> T makeRequest(HttpRequest request, Class<T> tClass) {
        T responseEntity;
        try {
            var response = makeRequest(request);
            responseEntity = objectMapper.readValue(response.body().getBytes(), tClass);
            return responseEntity;
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("IO exception");
        }
    }

    protected HttpResponse<String> makeRequest(HttpRequest request) {
        log.info("event=makeRequestInvoked request={}", request);
        try {
            var response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() >= 300){
                log.error("event=errorMakeRequest response={}", response);
                // TODO create custom error
                if (response.statusCode() == 401){
                    throw new UnauthorizedException();
                }
                throw new RuntimeException("Error" + response.statusCode());
            } else if (response.statusCode() >= 200){
                log.info("event=responseSuccessful response={} body={}", response, response.body());
            }
            return response;
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }

    protected <T> List<T> makeRequestAsList(HttpRequest request, Class<T> tClass) {
        List<T> list = makeRequest(request, List.class);
        System.out.println(list);
        return list.stream()
                .map(object -> objectMapper.convertValue(object, tClass))
                .collect(Collectors.toList());
    }

    protected <T> T mapping(HttpResponse<String> response, Class<T> tClass) {
        try {
            return objectMapper.readValue(response.body().getBytes(), tClass);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * @param data
     * @return
     */
    protected HttpRequest.BodyPublisher formUrlEncodedData(Map<Object, Object> data) {
        StringBuilder builder = new StringBuilder();
        for (Map.Entry<Object, Object> entry : data.entrySet()) {
            if (builder.length() > 0) {
                builder.append("&");
            }
            builder.append(URLEncoder.encode(entry.getKey().toString(), StandardCharsets.UTF_8));
            builder.append("=");
            builder.append(URLEncoder.encode(entry.getValue().toString(), StandardCharsets.UTF_8));
        }

        return HttpRequest.BodyPublishers.ofString(builder.toString());
    }

    /**
     * @param obj
     * @return
     */
    protected String formJsonData(Object obj) {
        try {
            return objectMapper.writeValueAsString(obj);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }
}
