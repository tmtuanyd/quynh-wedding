export default function Location() {
  return (
    <section className="py-16 px-4 text-center  flex flex-col items-center justify-center wedding-gradient text-black">
      {/* Tiêu đề */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-6xl  font-great mb-4 ">Địa điểm</h2>
        <p className="text-lg italic">
          Chúng mình rất hân hạnh được đón tiếp bạn tại
        </p>
      </div>

      {/* Thông tin nhà gái */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center">
          <span className="mr-2">🏡</span> Nhà gái
        </h3>
        <div className="text-left">
          <p className="text-lg mb-2 flex items-center">
            <span className="mr-2 ">👨</span>
            Ông: <span className="font-medium ml-1">Trần Văn Huấn</span>
          </p>
          <p className="text-lg flex items-center">
            <span className="mr-2 ">👩</span>
            Bà: <span className="font-medium ml-1">Hà Thị Quy</span>
          </p>
        </div>
      </div>

      {/* Bản đồ */}
      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg mt-[40px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25722.048397745442!2d106.25139718042627!3d21.237781237428564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313571fd1a2be03b%3A0x93546ade412142fd!2zWHXDom4gUGjDuiwgVHAuIELhuq9jIEdpYW5nLCBC4bqvYyBHaWFuZywgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1745398895643!5m2!1svi!2s"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </section>
  );
}
