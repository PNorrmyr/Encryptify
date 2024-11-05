package com.example;

import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

public class Crypter {
   private final SecretKey secretKey = this.generateKey();

   public Crypter() throws NoSuchAlgorithmException {
   }

   private boolean validateInput(String input){
      if(input == null) {
         throw new IllegalArgumentException("Input cannot be null");
      } else if(input.length() > 100) {
         throw new IllegalArgumentException("Max 100 characters are allowed");
      }
      return true;
   }

   private SecretKey generateKey() throws NoSuchAlgorithmException {
      KeyGenerator keyGen = KeyGenerator.getInstance("AES");
      keyGen.init(128);
      return keyGen.generateKey();
   }

   public String encrypt(String input) throws Exception {
      byte[] encryptedBytes = null;
      if(validateInput(input)){
      Cipher cipher = Cipher.getInstance("AES");
      cipher.init(1, this.secretKey);
      encryptedBytes = cipher.doFinal(input.getBytes());
      }
      return Base64.getEncoder().encodeToString(encryptedBytes);
   }

   public String decrypt(String encryptedText) throws Exception {
      Cipher cipher = Cipher.getInstance("AES");
      cipher.init(2, this.secretKey);
      byte[] decryptedBytes = cipher.doFinal(Base64.getDecoder().decode(encryptedText));
      return new String(decryptedBytes);
   }
}