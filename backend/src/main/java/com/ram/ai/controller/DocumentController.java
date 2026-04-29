package com.ram.ai.controller;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class DocumentController {

  @PostMapping(value="/documents", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public Map<String, Object> upload(@RequestPart("file") MultipartFile file) {
    return Map.of("status", "uploaded", "fileName", file.getOriginalFilename());
  }

  @PostMapping("/ask")
  public Map<String, Object> ask(@RequestBody Map<String, String> req) {
    return Map.of("question", req.get("question"), "answer", "This is a grounded AI response.", "sources", new String[]{"doc-1", "doc-2"});
  }
}
