/*
==================== CLAUDE — TROUBLESHOOTING, AI FLUENCY & EVALS ====================
WHAT YOU'LL LEARN
    - Understand common problems when using AI and how to fix them.
    - Understand what AI Fluency means.
    - Learn how Evals can help you check Claude's performance for your work.

COMMON CLAUDE CHALLENGES & HOW TO FIX THEM
1. RESPONSE IS TOO GENERIC
   Problem:
       Claude does not have enough context about your situation.
   Fix:
       Give Claude more details about your role, audience, goal, and constraints.

   Example:
       Bad:
           "Write an email about project delay."

       Better:
           "Write an email to our client explaining that the project will be delayed by 2 weeks. 
            Keep it professional and apologetic."


2. RESPONSE IS TOO LONG OR TOO SHORT
   Problem:
       Claude doesn't know how much detail you want.

   Fix:
       Clearly specify the required length.

   Example:
       "Explain this in 5 bullet points."
       "Keep the answer under 100 words."
       "Give me a detailed explanation with examples."


3. CLAUDE DIDN'T FOLLOW THE REQUIRED FORMAT
   Problem: Claude understands what you want but not how you want it presented.

   Fix: Clearly describe the format or provide an example.

   Example:
       Instead of: "Explain the project."

       Say: "Explain the project using:
           - Problem
           - Solution
           - Technologies
           - Benefits"


4. CLAUDE GIVES INCORRECT INFORMATION
   Problem: AI can sometimes give information that sounds correct but is actually wrong.

   Fix:
       - Verify important information yourself.
       - Ask Claude to provide sources.
       - Use web search when current information is required.

   Example: "Give me the answer with reliable sources and mention anything you are uncertain about."

5. THE TONE IS WRONG
   Problem: Claude may use a professional/helpful tone by default.

   Fix: Clearly describe the tone you want.

   Example:
       "Make this friendly and conversational."
       "Make this formal and professional."
       "Explain this like you're teaching a beginner."

==================== ITERATION MINDSET ====================
Your first prompt does NOT always need to be perfect.

Think:
    Prompt → Response → Review → Feedback → Refine → Better Response

Good AI users:
    - Treat the first response as a starting point.
    - Review what is good and what needs improvement.
    - Give specific feedback.

Example:
    Less useful: "Make it better."

    Better:
        "Remove the first paragraph, make it shorter, and make the conclusion more action-oriented."

Note: If the conversation goes in the wrong direction:
        → Sometimes starting a new chat with a clearer prompt is faster.

==================== WHAT IS AI FLUENCY? ====================
AI Fluency = The ability to work effectively with AI.

It is not just knowing how to use AI tools.
It also means knowing:
    - What AI should do.
    - How to communicate with AI.
    - How to evaluate AI's output.
    - How to use AI responsibly.

==================== 4D AI FLUENCY FRAMEWORK ====================
1. DELEGATION
   Decide:
       - What should humans do?
       - What should AI do?
       - What should humans and AI do together?

   Example:
       AI → Generate test cases.
       Developer → Review correctness and edge cases.

2. DESCRIPTION
   Clearly explain to AI:
       - What you need.
       - What output you want.
       - How AI should perform the task.

   Example:
       "Review this function and find bugs.
       Explain each issue and provide a corrected version."

3. DISCERNMENT
   Critically evaluate AI's output.

   Check:
       - Is it correct?
       - Is it complete?
       - Is it appropriate?
       - What needs improvement?

   Example:
       AI gives you code → You run tests and review the logic
       instead of blindly accepting it.


4. DILIGENCE
   Use AI responsibly and safely.

   This includes:
       - Protecting sensitive information.
       - Verifying important information.
       - Being transparent about AI-assisted work.
       - Taking responsibility for the final result.

==================== EVALS ====================
Evals = Evaluations.

They help you systematically check how well Claude performs a specific task that is important to you.

=>  Why use Evals?
    - Understand where Claude is useful.
    - Find tasks where Claude needs more context.
    - Improve your prompts.
    - Build confidence in Claude's output.
    - Know where human review is still required.

==================== SIMPLE EVAL PROCESS ====================
1. COLLECT EXAMPLES
   Collect 5-10 examples of work you regularly do.
   Example:
       If you regularly write emails, collect 5-10 good emails.


2. CREATE TEST PROMPTS
   Create prompts that ask Claude to perform the same type of work.

   Example:
       "Write a professional email to a client about a 2-day project delay."

3. COMPARE RESULTS
   Compare Claude's output with your original examples.
   Ask:
       - Did Claude include the important information?
       - Is the tone correct?
       - Is anything missing?
       - Is the output useful?

4. REFINE
   Improve your prompt based on what you learned.

   Example:
       Claude's email is too formal.
       Improve prompt:
       "Write a professional but friendly email.
       Keep it under 150 words."

==================== EASY EVAL EXAMPLE — CODE ====================
Suppose you want Claude to generate unit tests.
Step 1:
    Take 5 functions from your existing project.
Step 2:
    Ask Claude:
        "Write Jest unit tests for this function. Include success cases, failure cases, and edge cases."
Step 3:
    Compare Claude's tests with the tests you would normally write.
Step 4:
    Check:
        - Did it cover important cases?
        - Did it miss edge cases?
        - Are the tests correct?
        - Does the code follow your project's style?

Step 5:
    Improve the prompt based on the results.

This gives you an idea of whether Claude is actually useful for generating tests in your project.


==================== SIMPLE DATA ANALYSIS EVAL ====================
Suppose you normally analyze sales data manually.
    Your process:
        Dataset → Manual Analysis → Report
Try:
    Dataset → Claude → Analysis
Then compare:
    Claude's Analysis
          VS
    Your Analysis

Check:
    - Are the numbers correct?
    - Did Claude find the important patterns?
    - Did it miss anything?
    - Does the final report make sense?

Use what you learn to improve your prompts.

==================== KEY IDEA ====================
AI Fluency means:
    Delegate the right work
          ↓
    Describe the task clearly
          ↓
    Evaluate the output critically
          ↓
    Use AI responsibly

Evals help answer:
    "How good is Claude at THIS specific task in MY workflow?"

LESSON REFLECTION
- Which Claude problems have you experienced?
- How can you improve your prompts next time?
- Where could Evals help you test a recurring task?
- How can the 4D Framework improve your AI collaboration?

CORE TAKEAWAY
    Don't just ask AI → Review → Evaluate → Give feedback → Improve.
    The goal is not to blindly trust AI.
    The goal is to become better at collaborating with AI.
*/