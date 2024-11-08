package com.example;

import java.security.NoSuchAlgorithmException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CrypterTest {

    private Crypter crypter;

    @BeforeEach
    @SuppressWarnings("unused")
    void setUp() throws NoSuchAlgorithmException{
        crypter = new Crypter();
    }

    @Test
    void encryptAndDecrypt() throws Exception {
            String inputString = "Hello World";

            String encryptedString = crypter.encrypt(inputString);
            String decryptedString = crypter.decrypt(encryptedString);

            assertEquals(inputString, decryptedString, "The decrypted string does not match the original.");
    }

    @Test
    void encryptAndDecryptSingleCharacter() throws Exception {
        String inputString = "A";

        String encryptedString = crypter.encrypt(inputString);
        String decryptedString = crypter.decrypt(encryptedString);

        assertEquals(inputString, decryptedString, "The decrypted string does not match the original single character.");
    }

    @Test
    void encryptAndDecryptMaxLength() throws Exception {
        String inputString = "A".repeat(100);

        String encryptedString = crypter.encrypt(inputString);
        String decryptedString = crypter.decrypt(encryptedString);

        assertEquals(inputString, decryptedString, "The decrypted string does not match the original at max length.");
    }

    @Test
    void encryptAndDecryptSpecialCharacters() throws Exception {
        String inputString = "Hello ! @#$%^&*()";

        String encryptedString = crypter.encrypt(inputString);
        String decryptedString = crypter.decrypt(encryptedString);

        assertEquals(inputString, decryptedString, "The decrypted string does not match the original with special characters.");
    }

    @Test
    void encryptEmptyString() throws Exception {
            String inputString = "";
            
            String encryptedString = crypter.encrypt(inputString);
            String decrypteString = crypter.decrypt(encryptedString);
            
            assertEquals(inputString, decrypteString, "The decrypted string for empty input should be empty");
    }

    @Test
    void encryptToManyCharacters() throws Exception {
        String inputString = "B".repeat(101);

        IllegalArgumentException thrown = assertThrows(IllegalArgumentException.class, () -> {
            crypter.encrypt(inputString);
        }, "Input has to many characters");

        assertEquals("Max 100 characters are allowed", thrown.getMessage());
    }

    
    @Test
    void encryptNullInput() throws Exception {
          IllegalArgumentException thrown = assertThrows(IllegalArgumentException.class, () -> {
            crypter.encrypt(null);
        });
        assertEquals("Input cannot be null", thrown.getMessage());
    }


}
