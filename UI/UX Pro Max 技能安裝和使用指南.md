# UI/UX Pro Max 技能安裝和使用指南

## 技能概述

**UI/UX Pro Max** 是一個 AI 技能，提供跨多個平台和框架構建專業 UI/UX 的設計智能。

### 核心功能

**v2.0 主要特性：設計系統生成器**
- AI 驅動的推理引擎
- 分析項目需求
- 自動生成完整、定制的設計系統
- 支持 161 個行業特定的推理規則

### 包含資源

- **67 個 UI 風格**：玻璃態、黏土態、極簡主義、野獸派、神經態、Bento 網格、深色模式、AI 原生 UI 等
- **161 個色彩調色板**：與 161 個產品類型一一對應的行業特定調色板
- **57 個字體配對**：策劃的排版組合，包含 Google Fonts 導入
- **25 種圖表類型**：儀表板和分析推薦
- **15 個技術棧**：React、Next.js、Astro、Vue、Nuxt.js、Nuxt UI、Svelte、SwiftUI、React Native、Flutter、HTML+Tailwind、shadcn/ui、Jetpack Compose、Angular、Laravel
- **99 個 UX 指南**：最佳實踐、反模式和可訪問性規則
- **161 個推理規則**：行業特定的設計系統生成

## 安裝方法

### 方法 1：使用 Claude Marketplace（Claude Code）

在 Claude Code 中直接安裝，使用兩個命令：

```bash
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

### 方法 2：使用 CLI（推薦）

```bash
# 全域安裝 CLI
npm install -g uipro-cli

# 進入你的專案目錄
cd /path/to/your/project

# 為你的 AI 助手安裝
uipro init --ai claude      # Claude Code
uipro init --ai cursor      # Cursor
uipro init --ai windsurf    # Windsurf
uipro init --ai antigravity # Antigravity
uipro init --ai copilot     # GitHub Copilot
uipro init --ai kiro        # Kiro
uipro init --ai codex       # Codex CLI
uipro init --ai qoder       # Qoder
uipro init --ai roocode     # Roo Code
uipro init --ai gemini      # Gemini CLI
uipro init --ai trae        # Trae
uipro init --ai opencode    # OpenCode
uipro init --ai continue    # Continue
uipro init --ai codebuddy   # CodeBuddy
uipro init --ai droid       # Droid (Factory)
uipro init --ai kilocode    # KiloCode
uipro init --ai warp        # Warp
uipro init --ai augment     # Augment
uipro init --ai all         # 所有助手
```

### 方法 3：全域安裝（所有專案可用）

```bash
uipro init --ai claude --global   # 安裝到 ~/.claude/skills/
uipro init --ai cursor --global   # 安裝到 ~/.cursor/skills/
```

### 其他 CLI 命令

```bash
uipro versions              # 列出可用版本
uipro update                # 更新到最新版本
uipro init --offline        # 跳過 GitHub 下載，使用捆綁資源
uipro uninstall             # 移除技能（自動檢測平台）
uipro uninstall --ai claude # 移除特定平台
uipro uninstall --global    # 從全域安裝中移除
```

## 使用方法

### 自動啟動模式（Skill Mode）

支持平台：Claude Code、Cursor、Windsurf、Antigravity、Codex CLI、Continue、Gemini CLI、OpenCode、Qoder、CodeBuddy、Droid (Factory)、KiloCode、Warp、Augment

只要自然聊天請求 UI/UX 工作，技能會自動激活：

```
Build a landing page for my SaaS product
```

### 斜線指令模式（Workflow Mode）

支持平台：Kiro、GitHub Copilot、Roo Code、KiloCode

使用斜線指令來呼叫技能：

```
/ui-ux-pro-max Build a landing page for my SaaS product
```

## 常見範例提示

```
Build a landing page for my SaaS product
Create a dashboard for healthcare analytics
Design a portfolio website with dark mode
Make a mobile app UI for e-commerce
Build a fintech banking app with dark theme
```

## 主要工作流程

1. **你提出需求** - 請求任何 UI/UX 相關任務（建置、設計、創建、實作、檢視、修正、改進）
2. **設計系統自動生成** - AI 利用推理引擎自動產生完整設計系統
3. **智慧推薦** - 根據產品類型和需求，找到最佳匹配的樣式、色彩與字體
4. **代碼生成** - 實現 UI，包含適當的色彩、字體、間距與最佳實踐
5. **預交付檢查** - 驗證常見 UI/UX 反模式

## 設計系統生成工作原理

### 流程圖

```
1. 用戶請求
   ↓
2. 多域搜尋（5 個並行搜尋）
   • 產品類型匹配（161 個類別）
   • 風格推薦（67 個風格）
   • 色彩調色板選擇（161 個調色板）
   • 登陸頁面模式（24 個模式）
   • 排版配對（57 個字體組合）
   ↓
3. 推理引擎
   • 匹配產品 → UI 類別規則
   • 應用風格優先級（BM25 排名）
   • 過濾行業反模式
   • 處理決策規則（JSON 條件）
   ↓
4. 完整設計系統輸出
   模式 + 風格 + 色彩 + 排版 + 效果
   + 要避免的反模式 + 預交付檢查清單
```

## 設計系統命令（進階用法）

直接存取設計系統產生器：

```bash
# 產生 ASCII 格式的設計系統
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness" --design-system -p "Serenity Spa"

# 產生 Markdown 格式
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "fintech banking" --design-system -f markdown

# 依產業範例搜尋
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant serif" --domain typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dashboard" --domain chart

# 技術棧特定指導
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "form validation" --stack react
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack html-tailwind
```

## 儲存設計系統（Master + Overrides 模式）

將設計系統存檔，實現跨會話的層級檢索：

```bash
# 生成並存到 design-system/MASTER.md
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system --persist -p "MyApp"

# 也建立特定頁面覆寫檔
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system --persist -p "MyApp" --page "dashboard"
```

### 目錄結構

```
design-system/
├── MASTER.md           # 全域設計規則（色彩、字體、間距、元件）
└── pages/
    └── dashboard.md    # 頁面特定覆寫（偏離 Master 的規則）
```

### 層級檢索流程

1. 建立特定頁面（如"Checkout"）時，先讀取 `design-system/pages/checkout.md`
2. 若存在，該規則優先
3. 若不存在，則使用 `design-system/MASTER.md` 的規則

### 情境提示範例

```
I am building the [Page Name] page. Please read design-system/MASTER.md.
Also check if design-system/pages/[page-name].md exists.
If the page file exists, prioritize its rules.
If not, use the Master rules exclusively.
Now, generate the code...
```

## 支援的技術棧

| 類別 | 技術棧範例 |
|------|----------|
| Web (HTML) | HTML + Tailwind（預設） |
| React 生態系 | React, Next.js, shadcn/ui |
| Vue 生態系 | Vue, Nuxt.js, Nuxt UI |
| Angular | Angular |
| PHP | Laravel (Blade, Livewire, Inertia.js) |
| 其他 Web | Svelte, Astro |
| iOS | SwiftUI |
| Android | Jetpack Compose |
| 跨平台 | React Native, Flutter |

只需在提示中提及偏好技術棧，或讓它預設為 HTML + Tailwind。

## 161 個行業特定推理規則

推理引擎包括以下領域的專門規則：

| 類別 | 範例 |
|------|------|
| 科技與 SaaS | SaaS、微型 SaaS、B2B 服務、開發者工具/IDE、AI/聊天機器人平台、網絡安全平台 |
| 金融 | 金融科技/加密、銀行、保險、個人財務追蹤器、發票和計費工具 |
| 醫療 | 診所、藥房、牙科、獸醫、心理健康、藥物提醒 |
| 電子商務 | 通用、奢侈品、市場 (P2P)、訂閱盒、食品配送 |
| 服務 | 美容/水療、餐廳、酒店、法律、家居服務、預訂和預約 |
| 創意 | 作品集、代理、攝影、遊戲、音樂流媒體、照片/視頻編輯器 |
| 生活方式 | 習慣追蹤器、食譜和烹飪、冥想、天氣、日記、心情追蹤器 |
| 新興技術 | Web3/NFT、空間計算、量子計算、自主無人機隊 |

每個規則包括：

- **推薦模式** - 登陸頁面結構
- **風格優先級** - 最佳匹配的 UI 風格
- **色彩情緒** - 行業適當的調色板
- **排版情緒** - 字體個性匹配
- **關鍵效果** - 動畫和交互
- **反模式** - 不要做什麼（例如，銀行業的"AI 紫色/粉紅色漸變"）

## 預交付檢查清單

```
[ ] 沒有使用表情符號作為圖標（使用 SVG：Heroicons/Lucide）
[ ] 所有可點擊元素都有 cursor-pointer
[ ] 懸停狀態具有平滑過渡（150-300ms）
[ ] 淺色模式：文本對比度最少 4.5:1
[ ] 鍵盤導航的焦點狀態可見
[ ] 尊重 prefers-reduced-motion
[ ] 響應式：375px、768px、1024px、1440px
```

## 設計系統範例

### 美容水療示例

```
目標：Serenity Spa - 推薦設計系統

模式：Hero-Centric + Social Proof
  轉換：情感驅動，帶有信任元素
  CTA：首屏上方，推薦後重複
  部分：
    1. Hero
    2. Services
    3. Testimonials
    4. Booking
    5. Contact

風格：Soft UI Evolution
  關鍵詞：軟陰影、微妙深度、平靜、高級感、有機形狀
  最適合：健康、美容、生活方式品牌、高級服務
  性能：優秀 | 可訪問性：WCAG AA

色彩：
  主要：#E8B4B8（柔和粉紅）
  次要：#A8D5BA（鼠尾草綠）
  CTA：#D4AF37（金色）
  背景：#FFF5F5（溫暖白色）
  文本：#2D3436（炭灰色）
  備註：平靜調色板，金色重音呈現奢華感

排版：Cormorant Garamond / Montserrat
  情緒：優雅、平靜、精緻
  最適合：奢侈品牌、健康、美容、編輯
  Google Fonts：https://fonts.google.com/share?selection.family=...

關鍵效果：
  軟陰影 + 平滑過渡（200-300ms）+ 溫和懸停狀態

要避免的反模式：
  亮霓虹色 + 刺耳動畫 + 深色模式 + AI 紫色/粉紅色漸變
```

## 前提條件

- Python 3.x 是搜尋腳本所需的

## 支援和資源

- **GitHub 倉庫**：https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- **官方網站**：https://NextLevelBuilder.io
- **相關項目**：GoClaw.sh、ClaudeKit.cc、TOSE.sh

## 快速開始

1. **安裝技能**：使用上述 CLI 命令之一
2. **進入項目目錄**：`cd /path/to/your/project`
3. **提出 UI/UX 需求**：自然語言描述你想要構建的內容
4. **AI 自動激活技能**：技能會自動分析並生成設計系統
5. **獲取代碼**：AI 將生成完整的、可用於生產的代碼

## 最佳實踐

1. **具體描述**：提供盡可能多的關於你的項目的詳細信息
2. **指定技術棧**：如果有偏好，告訴 AI 你想使用什麼技術
3. **使用設計系統**：利用 Master + Overrides 模式進行一致的設計
4. **遵循檢查清單**：確保所有預交付項目都已完成
5. **測試可訪問性**：驗證 WCAG AA 合規性

---

**版本**：v2.0  
**最後更新**：2026 年 3 月
