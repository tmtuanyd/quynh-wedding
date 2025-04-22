export default function Location() {
  return (
    <section className="bg-pink-100 py-16 px-4 text-center">
      <h2 className="text-3xl text-pink-700 font-cursive mb-4">
        Địa điểm tổ chức
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Nhà hàng Hoa Hồng, 123 Đường Tình Yêu, Quận 1, TP. Hồ Chí Minh
      </p>

      <div className="max-w-3xl mx-auto">
        <iframe
          title="Wedding Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.456109595759!2d106.70042471533258!3d10.775658362121422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec5b3d0a97f%3A0xf8f106f9e1a7dcf7!2zQ2h1bmcgQ2jhu6MgVGjhuqFtLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRLCBUUC4gSOG7kyBDaMOtbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1617709153896!5m2!1sen!2s"
          width="100%"
          height="400"
          loading="lazy"
          allowFullScreen
          className="rounded-xl shadow-md border-2 border-pink-300"
        ></iframe>
      </div>
    </section>
  );
}
