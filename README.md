# Voice-Enabled Caregiving Service Application

This repository contains the source code for the voice-enabled caregiving request platform. The application is designed to simplify the process of connecting elderly individuals in Yokohama with in-home caregivers by using a voice interface and a large language model (LLM). By leveraging prompt engineering, automated caregiver matching, and voice-to-text technologies, this platform aims to make accessing caregiving services as easy as possible, reducing barriers and improving user experiences.

## Features

- **Voice-First Interaction:**  
  Users can request caregiving services by simply speaking their needs. No advanced digital literacy or form-filling is required.
  
- **LLM-Driven Matching:**  
  The system uses a large language model to interpret user requests and automatically match them with the most suitable caregivers based on location, needs, and availability.
  
- **Step-by-Step Data Collection:**  
  The assistant gathers user details (name, birthday, gender, phone number, address, service needs, and schedule) one question at a time, making the process less overwhelming for elderly users.
  
- **Japanese Name and Address Handling:**  
  Although currently storing names in romanized form, the system is designed with the intention to integrate Japan’s MyNumber system in the future to handle complex Japanese naming conventions.
  
- **Real-Time Booking Confirmation:**  
  Once a suitable caregiver is found, the user receives immediate confirmation, including the caregiver’s name, contact details, and arrival time.
  
- **Speech-to-Text and Text-to-Speech Integration:**  
  Seamless integration with speech-to-text and text-to-speech APIs ensures natural and responsive voice interactions.

## Requirements

- **Python 3.8+**
- **pipenv or virtualenv** (recommended, but not mandatory)
- **API Keys:**  
  - **LLM / Large Language Model API Key:**  
    Required for accessing the language model. You can use services like OpenAI’s API or any compatible LLM provider.  
    Set your API key as an environment variable:
    ```bash
    export LLM_API_KEY=your_llm_api_key_here
    ```
    
  - **Speech-to-Text and Text-to-Speech API Key:**  
    Required for real-time audio processing (e.g., ElevenLabs, Google Cloud Speech-to-Text, AWS Transcribe, or Azure Cognitive Services).  
    For example, if using ElevenLabs:
    ```bash
    export ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
    ```
  
  - **Calendly API Key (Optional):**  
    If you integrate Calendly for caregiver scheduling:
    ```bash
    export CALENDLY_API_KEY=your_calendly_api_key_here
    ```
    
  - **Twilio API Key (Optional):**  
    For sending SMS notifications and confirmations:
    ```bash
    export TWILIO_ACCOUNT_SID=your_twilio_account_sid_here
    export TWILIO_AUTH_TOKEN=your_twilio_auth_token_here
    ```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/voice-caregiving-app.git
   cd voice-caregiving-app
   ```
   
2. **Create and activate a virtual environment (optional but recommended):**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
   
   Or using pipenv:
   ```bash
   pip install pipenv
   pipenv shell
   ```
   
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set your environment variables:**
   Make sure you have your API keys ready and set them as environment variables. For example:
   ```bash
   export LLM_API_KEY=your_llm_api_key
   export ELEVENLABS_API_KEY=your_elevenlabs_api_key
   # ...and so on for other services...
   ```

   Alternatively, you can use a `.env` file (if supported by your configuration) with:
   ```
   LLM_API_KEY=your_llm_api_key
   ELEVENLABS_API_KEY=your_elevenlabs_api_key
   ...
   ```
   
   Then ensure your code is configured to load environment variables from `.env`.

## Usage

1. **Run the Server:**
   ```bash
   python app.py
   ```
   
   This will start the application’s backend server. The server handles user requests, communicates with the LLM, speech APIs, and caregiving data sources.
   
2. **Accessing the Application:**
   Open your browser or voice-enabled client device. Follow the instructions on-screen or through voice prompts to start requesting caregiving services.
   
3. **Workflow:**
   - User speaks their request into the voice interface.
   - The application uses speech-to-text APIs to convert the input and feed it to the LLM.
   - The LLM, guided by a system prompt, asks for required user details step-by-step.
   - Once all data is collected, the LLM finds a suitable caregiver from the knowledge base and confirms the booking.
   - The user receives a final confirmation message or SMS, completing the process.

## Code Structure

- `app.py`: Entry point for the server application.
- `core/`: Contains core logic for prompt engineering, data extraction, and caregiver matching.
- `integrations/`: Modules for integrating with external APIs (speech-to-text, LLM, Calendly, Twilio).
- `data/`: Contains sample caregiver data and configuration files.
- `tests/`: Unit tests and integration tests.

## Testing

To run tests:

```bash
pytest tests/
```

Ensure you have set environment variables and have at least mock keys for testing if any external API calls are made.

## Contributing

Contributions are welcome! Please open an issue to discuss proposed changes or submit a pull request with a detailed explanation.

## License

This project is licensed under the [MIT License](LICENSE).


Thank you for using the Voice-Enabled Caregiving Service Application! We hope it simplifies and enhances the caregiving request experience.

