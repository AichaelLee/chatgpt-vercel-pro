export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `请持续关注AI Insights 公众号，同时该网站仅作为演示，不提供长期服务，请勿提问涉政涉敏等问题，请勿滥用，如有发现，永久拉黑。
- 欢迎加入我的星球，在我的知识星球里，你可以关注到最新的前沿消息，和chatGPT的高级玩法，用chatGPT挣笔小钱。
- 本网站目前完全本人自掏腰包，投入有限，key值可能随时超额，切用且珍惜，`
export type Setting = typeof setting

export const resetContinuousDialogue = false
