/*
==================== AI FLUENCY – CORE TERMS ====================
AI Fluency:
    - Ability to use AI effectively, efficiently, safely, and ethically.
    - Helps us adapt to changing AI technologies.
    - Example: Use AI to generate code, but review and test it before using it.

The 4Ds of AI Fluency:
    1. Delegation  → Decide what humans should do vs. what AI should do.
       Example: AI writes boilerplate code; developer designs the architecture.

    2. Description → Clearly tell AI what you want and how it should work.
       Example: "Create a NestJS API using TypeScript and PostgreSQL."

    3. Discernment → Critically evaluate AI's output and behavior.
       Example: Check whether AI-generated code is correct, secure, and efficient.

    4. Diligence   → Use AI responsibly, ethically, and safely.
       Example: Don't share passwords, API keys, or confidential client data with AI.

Delegation:
    - Problem Awareness → Understand the goal/problem before using AI.
      Example: First understand why an API is slow before asking AI to optimize it.

    - Platform Awareness → Know AI's capabilities and limitations.
      Example: Use a coding AI for code generation, but don't blindly trust its output.

    - Task Delegation → Give each task to AI or humans based on their strengths.
      Example: AI writes unit tests; developer verifies important edge cases.

Description:
    - Product Description → Define WHAT you want: output, format, audience, style.
      Example: "Give me a TypeScript function with unit tests."

    - Process Description → Define HOW AI should approach the task.
      Example: "First analyze the existing code, then suggest improvements."

    - Performance Description → Define HOW AI should behave.
      Example: "Be concise and challenge my assumptions when necessary."


Discernment:
    - Product Discernment → Check the quality, accuracy, relevance, and coherence.
      Example: Verify whether the generated SQL query returns the correct data.

    - Process Discernment → Check whether AI's approach/reasoning makes sense.
      Example: Check if the suggested optimization actually reduces complexity.

    - Performance Discernment → Check whether AI's communication/behavior works
      well for your needs.
      Example: Ask AI to be concise if its answers are too detailed.


Diligence:
    - Creation Diligence → Carefully choose AI systems and how you use them.
      Example: Use an approved AI tool for company code.

    - Transparency Diligence → Be honest about AI's role in your work.
      Example: Mention AI assistance when required by your organization.

    - Deployment Diligence → Verify AI output and take responsibility for what
      you use or share.
      Example: Review and test AI-generated code before deploying it.


==================== HUMAN–AI INTERACTION MODES ====================
Automation:
    - Human gives specific instructions → AI performs the task.
    - Example: "Convert this JSON into a TypeScript interface."

Augmentation:
    - Human and AI work together as thinking partners through back-and-forth collaboration.
    - Example: Discuss system-design options with AI and improve the design together.

Agency:
    - Human sets AI's knowledge, goals, and behavior → AI works independently on the human's behalf.
    - Example: An AI agent monitors errors and automatically creates bug reports.


==================== AI TECHNICAL CONCEPTS ====================
Generative AI:
    - AI that creates new content such as text, images, and code.
    - Example: Generate a React component from a description.

LLM (Large Language Model):
    - AI trained on huge amounts of text to understand and generate language.
    - Example: Claude generates an explanation for a TypeScript concept.

Claude:
    - Anthropic's family of Large Language Models.
    - Example: Use Claude to analyze a large codebase or document.

Parameters:
    - Internal mathematical values that help an AI model process information.
    - Modern LLMs have billions of parameters.
    - Example: Parameters help the model learn relationships between words.

Neural Networks:
    - Computing systems made of connected layers that learn patterns from data.
    - Example: A neural network learns patterns from millions of text examples.

Transformer Architecture:
    - AI architecture introduced in 2017 that efficiently processes text and
      understands relationships between words across long passages.
    - Example: Transformers help an LLM understand which words in a sentence
      are related to each other.

Scaling Laws:
    - AI performance generally improves as models get larger, use more data,
      and receive more computing power.
    - New abilities can sometimes appear at certain scales.
    - Example: A larger model may solve complex coding problems better than
      a smaller model.

Pre-training:
    - Initial training where AI learns language patterns and general knowledge
      from large amounts of data.
    - Example: Model learns grammar, coding patterns, and general knowledge.

Fine-tuning:
    - Additional training that teaches models to follow instructions, be helpful,
      and avoid harmful responses.
    - Example: Training a model to respond in a specific business style.

Context Window:
    - The amount of information an AI can consider at one time, including chat
      history and shared documents.
    - Example: Give AI a large code file so it can understand the surrounding code.

Hallucination:
    - When AI confidently gives information that sounds correct but is actually
      wrong.
    - Example: AI invents a library function that doesn't actually exist.

Knowledge Cutoff:
    - The point in time after which the model has no built-in knowledge from
      its training.
    - Example: A model may not know about a technology released after its
      training data.

Reasoning/Thinking Models:
    - Models designed to handle complex problems using deeper reasoning.
    - Example: Use a reasoning model to solve a complex system-design problem.

Temperature:
    - Controls response randomness.
    - Higher → more varied/creative responses.
    - Lower → more predictable/focused responses.
    - Example: Higher temperature for brainstorming; lower for structured code.

RAG (Retrieval-Augmented Generation):
    - Connects AI to external knowledge sources to provide more accurate answers
      and reduce hallucinations.
    - Example: AI searches company documentation before answering an employee.

Bias:
    - Systematic patterns that may unfairly favor or disadvantage certain groups
      or viewpoints.
    - Example: Training data may cause an AI system to favor one type of candidate.


==================== PROMPT ENGINEERING ====================

Prompt:
    - Input given to an AI, including instructions and shared documents.
    - Example: "Explain dependency injection in TypeScript with an example."

Prompt Engineering:
    - Designing effective prompts to get the desired AI output.
    - Example: Specify role + task + context + constraints + output format.

Chain-of-Thought Prompting:
    - Asking AI to break a complex problem into smaller reasoning steps.
    - Example: "Analyze this algorithm step-by-step and identify its time complexity."

Few-Shot / N-Shot Prompting:
    - Showing AI examples of the desired input → output pattern.
    - "N" = number of examples provided.
    - Example: Give AI 2 examples of your preferred coding style before asking
      it to write more code.

Role / Persona:
    - Telling AI to respond as a specific role, expertise level, or style.
    - Example: "Act as a senior Node.js developer and review this code."

Output Constraints / Formatting:
    - Clearly specify the required format, length, structure, or other output rules.
    - Example: "Give the answer in 5 bullet points with one code example."

Think-First Approach:
    - Asking AI to carefully analyze a problem before giving the final answer,
      which can improve the quality of complex responses.
    - Example: "Analyze the requirements and edge cases first, then provide
      the final solution."
*/
