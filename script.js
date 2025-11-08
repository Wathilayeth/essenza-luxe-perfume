// 💬 Chatbot Popup Logic
const chatbotToggle1 = document.getElementById("chatbotToggle1");
const chatbot1 = document.getElementById("chatbot1");
const closeChat1 = document.getElementById("closeChat1");

chatbotToggle1.addEventListener("click", () => {
  chatbot1.style.display = "flex";
});

closeChat1.addEventListener("click", () => {
  chatbot1.style.display = "none";
});

// 🧠 20 Common Q&A
const qa1 = {
  "hello": "Hi there! 👋 How can I help you today?",
  "hi": "Hello! How are you doing?",
  "how are you": "I’m doing great, thanks for asking! 😊",
  "what is your name": "I'm your AI Assistant 🤖",
  "what can you do": "I can answer your common questions and assist you with website info!",
  "who created you": "I was created by Wathila Yethmal 🧠",
  "what is ai": "AI stands for Artificial Intelligence — machines that can think and learn!",
  "tell me a joke": "Why did the computer catch a cold? Because it had a bad byte! 😂",
  "bye": "Goodbye! Have a great day! 👋",
  "thank you": "You're welcome! 😊",
  "what is your purpose": "I’m here to help you with your questions and make things easier!",
  "what is html": "HTML stands for HyperText Markup Language — it’s used to create webpages.",
  "what is css": "CSS stands for Cascading Style Sheets — it styles how HTML looks!",
  "what is javascript": "JavaScript adds interactivity and logic to your website 💻",
  "who is wathila": "Wathila Yethmal is an AI Engineer and the creator of this chatbot! 🚀",
  "what time is it": new Date().toLocaleTimeString(),
  "how old are you": "I'm as young as the latest line of code! 😄",
  "what is bmw": "BMW is a German luxury car brand, known for performance and style.",
  "do you like cars": "Of course! Especially the BMW 520d Sport model 😎",
  "what is sri lanka": "Sri Lanka is a beautiful island country in South Asia 🇱🇰",
  "hi": "Hi! How are you? How can I assist you today?",
  "hello": "Hello there! How can I help you today?",
  "hey": "Hey! Nice to see you. How can I assist you?",
  "how are you": "I'm fine, thank you! What about you?",
  "what is your name": "I'm your AI assistant! You can call me EssenzaBot 🤖.",
  "who are you": "I'm an AI chatbot created to help visitors like you.",
  "who made you": "I was created by Wathila Yethmal 💻.",
  "what can you do": "I can answer your questions, chat with you, and help with your website tasks!",
  "thank you": "You're very welcome! 😊",
  "thanks": "No problem! Happy to help!",
  "bye": "Goodbye! Have a great day! 👋",
  "goodbye": "See you soon! Take care!",
  "what's up": "Just here helping people like you. What’s up with you?",
  "are you real": "I'm not human, but I'm real enough to chat with you 😉.",
  "where are you from": "I live inside your website 🌐, created by Wathila.",
  "who is wathila": "Wathila Yethmal is a smart and creative developer who built this chatbot system 😎.",
  "how old are you": "I'm just a few lines of code old — but learning fast!",
  "can you help me": "Of course! What do you need help with?",
  "i love you": "Aww 😳 That’s sweet! I like you too 💕",
  "good morning": "Good morning! Hope you have a wonderful day ☀️",
  "good night": "Good night 🌙 Sleep well!",
  "what is your name": "I’m EssenzaBot, your friendly AI assistant 🤖.",
  "capital of Sri Lanka": "The capital of Sri Lanka is Sri Jayawardenepura Kotte.",
  "how are you doing": "I’m doing great! Thanks for asking 😄",
  "who created you": "I was developed by Wathila Yethmal, your friendly AI engineer.",
  "what is your purpose": "My purpose is to make your life easier and your website smarter 💡.",
  "how can you help me": "I can answer your questions and assist with anything related to this website.",
  "are you a robot": "Yes! I’m an AI robot, but I’m friendly 🤖.",
  "can you talk": "Yes, I can chat with you right here!",
  "nice to meet you": "Nice to meet you too! 😊",
  "what’s your favorite color": "I love blue — it reminds me of calm and creativity 💙.",
  "open ai": "OpenAI is the amazing company behind models like me!",
  "how do you work": "I use AI models and code to understand and respond to your questions.",
  "tell me a joke": "Why did the computer go to the doctor? Because it had a virus! 😂",
  "is it original": "Yes! All our perfumes are 100% authentic ✅.",
  "is it authentic": "Absolutely! We only sell genuine, high-quality perfumes.",
  "do you sell originals": "Yes, all perfumes are original and sourced from trusted suppliers.",
  "what are perfume notes": "Perfume notes are the layers of scent — top, middle (heart), and base notes 🌸.",
  "what are top notes": "Top notes are the first impression of a perfume — usually light and fresh.",
  "what are heart notes": "Heart notes appear after the top notes fade and form the core of the fragrance 💖.",
  "what are base notes": "Base notes are deep, long-lasting scents that remain after the others fade 🌿.",
  "is perfume oil long lasting": "Yes! Perfume oils usually last longer than sprays.",
  "is longevity good": "Yes, our perfumes are designed for long-lasting performance.",
  "do you ship": "Yes, we offer island-wide shipping 🚚.",
  "do you deliver": "Yes, we deliver to your doorstep!",
  "how long delivery take": "Delivery usually takes 2–4 working days 🚀.",
  "do you have free delivery": "We offer free delivery on selected orders 🎁.",
  "is cash on delivery available": "Yes! Cash on delivery is available for most areas 💵.",
  "can i return a perfume": "Returns are accepted if the product is unopened and unused.",
  "do you sell tester bottles": "Yes, we also offer tester bottles for select perfumes 🧴.",
  "what is the best seller": "Our top sellers are Baccarat Rouge 540, Dior Sauvage, and Oud Satin Mood ✨.",
  "what is unisex perfume": "Unisex perfumes are made for everyone — neither too masculine nor feminine 👃.",
  "do you sell men perfumes": "Yes! We have a large range of men’s perfumes 👔.",
  "do you sell women perfumes": "Of course! Discover elegant fragrances for women 💐.",
  "what brands do you sell": "We sell brands like Dior, Chanel, Versace, Tom Ford, Creed, and more 🌟.",
  "is it safe for skin": "Yes, our perfumes are dermatologically safe and tested.",
  "how to use perfume oil": "Apply gently to pulse points like wrists, neck, and behind ears.",
  "how to store perfume": "Keep it in a cool, dry place away from sunlight ☀️.",
  "how to make perfume last": "Apply on moisturized skin and avoid rubbing the scent.",
  "what is the difference between edt and edp": "EDT (Eau de Toilette) is lighter; EDP (Eau de Parfum) lasts longer 💧.",
  "do you have gift sets": "Yes! We offer beautiful perfume gift sets 🎁.",
  "is there any discount": "Yes, check our promotions page for current offers 💸.",
  "can i test before buying": "You can visit our store to test samples before buying 🏬.",
  "where is your shop": "Our store is in Colombo, Sri Lanka 🇱🇰.",
  "what are your working hours": "We’re open from 10:00 AM to 7:30 PM every day 🕖.",
  "what payment methods accepted": "We accept cash, cards, and online payments 💳.",
  "is perfume oil better": "Perfume oils are stronger, longer-lasting, and alcohol-free 🌿.",
  "how to choose perfume": "Pick a scent that matches your personality — floral, woody, oriental, or fresh 🌸.",
  "do you have arabic perfumes": "Yes! We have a wide range of rich Arabic perfumes 🕌.",
  "what is the difference between perfume and body spray": "Perfume lasts much longer, while body sprays are lighter and cheaper.",
  "can i mix perfumes": "Yes! Layering perfumes can create your own unique scent 💫.",
  "what is oud": "Oud is a rare, luxurious wood used in many Arabic fragrances 🌳.",
  "is it alcohol free": "Yes, our perfume oils are alcohol-free.",
  "what perfume lasts the longest": "Oud-based and oil-based perfumes last the longest 🕰️.",
  "what is musk": "Musk is a deep, sensual scent often used as a base note 💕.",
  "what is floral perfume": "Floral perfumes smell like flowers — elegant and romantic 🌹.",
  "what is citrus perfume": "Citrus perfumes are fresh and energizing 🍊.",
  "what is woody perfume": "Woody perfumes have deep, earthy tones like sandalwood or cedar 🌲.",
  "what is oriental perfume": "Oriental perfumes are warm, spicy, and exotic 🔥.",
  "can men wear floral perfumes": "Of course! Many floral scents are perfectly unisex 🌼.",
  "can women wear oud": "Definitely! Oud perfumes are loved by both men and women ❤️.",
  "how long does perfume last": "Depends on concentration — EDP lasts 6–8 hours, oils even longer ⏳.",
  "what is layering perfume": "It means combining two or more scents to make a unique one.",
  "does heat affect perfume": "Yes, heat can damage perfume quality — store in cool areas.",
  "do perfumes expire": "Yes, typically after 3–5 years, but it varies.",
  "can i order online": "Yes! You can order directly through our website 🛒.",
  "how do i track my order": "We’ll send a tracking link once your order ships 📦.",
  "how to contact you": "You can call us or use the contact form on our site ☎️.",
  "what is niche perfume": "Niche perfumes are exclusive, high-quality artisan fragrances 💎.",
  "what is designer perfume": "Designer perfumes are made by major fashion brands like Dior or Chanel 👗.",
  "is perfume good gift": "Absolutely! Perfume is a perfect and thoughtful gift 🎁.",
  "do you sell small bottles": "Yes, we offer travel-size and mini bottles ✈️.",
  "what is the difference between oil and spray perfume": "Oil perfumes last longer, while sprays are lighter and easier to apply.",
  "can i refill my perfume bottle": "Yes! Some bottles are refillable — check the product details.",
  "do you sell luxury perfumes": "Yes, we specialize in high-end and luxury fragrances ✨."
};

// 📨 Chat Logic
const sendBtn1 = document.getElementById("sendBtn1");
const userInput1 = document.getElementById("userInput1");
const chatBody1 = document.getElementById("chatBody1");

sendBtn1.addEventListener("click", sendMessage1);
userInput1.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage1();
});

function sendMessage1() {
  const text = userInput1.value.trim().toLowerCase();
  if (text === "") return;

  appendMessage1(text, "user");
  userInput1.value = "";

  // Show "thinking..." first
  const thinkingMsg = document.createElement("div");
  thinkingMsg.classList.add("thinking1");
  thinkingMsg.textContent = "Thinking...";
  chatBody1.appendChild(thinkingMsg);
  chatBody1.scrollTop = chatBody1.scrollHeight;

  setTimeout(() => {
    thinkingMsg.remove();
    const reply = qa1[text] || "🤔 Sorry, I don't know that yet.";
    appendMessage1(reply, "bot");
  }, 1500); // 1.5 sec delay for realism
}

function appendMessage1(msg, sender) {
  const div = document.createElement("div");
  div.classList.add("chat-message1", sender === "user" ? "user-message1" : "bot-message1");
  div.textContent = msg;
  chatBody1.appendChild(div);
  chatBody1.scrollTop = chatBody1.scrollHeight;
}