package dev.ericksuarez.user.facade.service.client;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

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
            if (response.statusCode() >= 300){
                log.error("event=errorMakeRequest response={}", response);
            }
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
            return httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }
}
