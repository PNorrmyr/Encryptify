package com.example;

import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/crypter/v1")
public class CrypterController {

    private final Crypter crypter;

    @Autowired
    public CrypterController() throws NoSuchAlgorithmException {
        this.crypter = new Crypter();
    }

    @PostMapping("/encrypt")
    public String encrypt(@RequestBody String input) throws Exception {
        return crypter.encrypt(input);
    }

    @PostMapping("/decrypt")
    public String decrypt(@RequestBody String encryptedText) throws Exception {
        return crypter.decrypt(encryptedText);
    }
}
