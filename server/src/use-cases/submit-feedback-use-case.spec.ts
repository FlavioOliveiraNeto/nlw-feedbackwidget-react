import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const creatFeedbackSpy = jest.fn();
const sendMailkSpy = jest.fn();

const  submitFeedback = new SubmitFeedbackUseCase(
  { create: creatFeedbackSpy },
  { sendMail: sendMailkSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,88743428734283428',
    })).resolves.not.toThrow();

    expect(creatFeedbackSpy).toHaveBeenCalled();
    expect(sendMailkSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,88743428734283428',
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,88743428734283428',
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'image.png',
    })).rejects.toThrow();
  });
});