#include <ArduinoJson.h>



void setup() {
  Serial.begin(9600);

}

void loop() {
  if(Serial.read()=='j'){
    DynamicJsonDocument doc(1024);
    
    int temp[] = {21, 24, 25, 26, 27, 28, 29, 30, 31, 32};

    for (int i = 0; i<10; i++){
      doc[i]["key"] = i;
      doc[i]["value"] = temp[i];   
    }
      
    serializeJson(doc, Serial);
    Serial.println();
  }

}
