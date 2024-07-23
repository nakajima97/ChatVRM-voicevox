import { reduceTalkStyle } from "@/utils/reduceTalkStyle";
import { koeiromapV0 } from "../koeiromap/koeiromap";
import { TalkStyle } from "../messages/messages";

export async function synthesizeVoice(
  message: string,
  speakerX: number,
  speakerY: number,
  style: TalkStyle
) {
  const koeiroRes = await koeiromapV0(message, speakerX, speakerY, style);
  return { audio: koeiroRes.audio };
}

export async function synthesizeVoiceApi(
  message: string,
) {
  const style_id = 10005;

  // クエリの初期値を得る
  const queryResponse = await fetch(`http://localhost:50121/audio_query?style_id=${style_id}&text=${message}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const query = await queryResponse.json();

  // 音声データの取得
  const res = await fetch(`http://localhost:50121/synthesis?style_id=${style_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accept": "audio/wav"
    },
    body: JSON.stringify(query),
  });

  const data = await res.blob();

  // もともとのコードがURLで渡していたのでそれに倣った
  const url = URL.createObjectURL(data);

  return { audio: url };
}
