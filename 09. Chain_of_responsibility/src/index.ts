// index.ts
import { CoachHandler } from './CoachHandler';
import { AssistantCoachHandler } from './AssistantCoachHandler';
import { CaptainHandler } from './CaptainHandler';

// Tạo chuỗi xử lý yêu cầu
const coach = new CoachHandler();
const assistantCoach = new AssistantCoachHandler();
const captain = new CaptainHandler();

// Thiết lập chuỗi
coach.setNext(assistantCoach);
assistantCoach.setNext(captain);

// Gửi các yêu cầu đến chuỗi
coach.handleRequest("Change Tactics");  // Huấn luyện viên: Đang thay đổi chiến thuật.
coach.handleRequest("Substitute Player");  // Trợ lý huấn luyện viên: Đang thay cầu thủ.
coach.handleRequest("Emergency Notification");  // Đội trưởng: Đang thông báo cho các cầu thủ về tình huống khẩn cấp.
