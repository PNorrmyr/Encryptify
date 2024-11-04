package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CrypterTest {

    @Test
    void encryptAndDecrypt() {
        try {
            Crypter crypter = new Crypter();
            String inputString = "Hello World";

            // When
            String encryptedString = crypter.encrypt(inputString);
            String decryptedString = crypter.decrypt(encryptedString);

            // Then
            assertEquals(inputString, decryptedString, "The decrypted string does not match the original.");
        } catch (Exception e) {
            throw new RuntimeException("Unexpected exception: " + e.getMessage(), e);
        }
    }
}
