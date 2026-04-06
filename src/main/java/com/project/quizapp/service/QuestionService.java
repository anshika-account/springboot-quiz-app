package com.project.quizapp.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.quizapp.entity.Question;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.List;

@Service
public class QuestionService {

    public List<Question> getAllQuestions() {
        try {
            ObjectMapper mapper = new ObjectMapper();

            InputStream inputStream = new ClassPathResource("questions.json").getInputStream();

            return mapper.readValue(inputStream, new TypeReference<List<Question>>() {});
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}