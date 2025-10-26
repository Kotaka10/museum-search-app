package com.example.museumsearch.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.museumsearch.model.Museum;
import com.example.museumsearch.service.MuseumService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/admin/museums")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminMuseumController {

    private final MuseumService museumService;

    @GetMapping
    public ResponseEntity<List<Museum>> getMuseums(@RequestParam(required = false) String status) {
        if (status == "APPROVED") {
            return ResponseEntity.ok(museumService.getApprovedMuseums());
        }
        if (status == "PENDING") {
            return ResponseEntity.ok(museumService.getPendingMuseums());
        }
        return null;
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<Museum> approveMuseum(@PathVariable Long id) {
        log.info("美術館を承認します: id={}", id);
        return ResponseEntity.ok(museumService.approveMuseum(id));
    }

    @PutMapping("/{id}/reject")
    public ResponseEntity<Museum> rejectMuseum(@PathVariable Long id) {
        log.info("美術館を拒否します: id={}", id);
        return ResponseEntity.ok(museumService.rejectMuseum(id));
    }
}
