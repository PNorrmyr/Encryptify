package com.example;

import java.security.NoSuchAlgorithmException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CrypterTest {

    private Crypter crypter;

    @BeforeEach
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
    void encryptEmptyString() throws Exception {
            String inputString = "";
            
            String encryptedString = crypter.encrypt(inputString);
            String decrypteString = crypter.decrypt(encryptedString);
            
            assertEquals(inputString, decrypteString, "The decrypted string for empty input should be empty");
    }

    @Test
    void encryptToManyCharacters() throws Exception {
        String inputString = "This string is definitely more than twenty characters long";

        IllegalArgumentException thrown = assertThrows(IllegalArgumentException.class, () -> {
            crypter.encrypt(inputString);
        }, "Input has to many characters");

        assertEquals("Max 20 characters are allowed", thrown.getMessage());
    }

    
    @Test
    void encryptNullInput() throws Exception {
          IllegalArgumentException thrown = assertThrows(IllegalArgumentException.class, () -> {
            crypter.encrypt(null);
        });

        assertEquals("input cannot be null", thrown.getMessage());
    }


}
