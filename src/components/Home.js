// components/Home.js
import IMG from "./1.png";
import IMG1 from "./ll.png";
import IMG2 from "./ee.jpg";
import IMG3 from "./ii.png";
import IMG4 from "./r.png"
import React from "react";

function Home() {
  return (
    <div className="relative  ">
      <img src={IMG} alt="img" className="w-full h-auto" />
      <div className="absolute sm:top-6 top-10 left-5 right-0 bottom-0   justify-center  ">
        <h1 className="text-white text-9xl font-bold  drop-shadow-md  md:text-8xl  sm:text-5xl  uppercase">
          AL AMANE <br />
          LIBRAIRIE <br /> مكتبة الأمان
        </h1>
      </div>
      <div className="bg-gray-100 flex items-center sm:flex-col  p-8">
        <img
          src={IMG2}
          alt="img"
          className="rounded-lg mr-4 md:w-1/2 sm:hidden "
        />
        <div>
          <h1 className="text-green-500  text-7xl mb-4 md:text-4xl sm:text-3xl sm:text-center ">
            Alamane Librairie
          </h1>
          <img
            src={IMG2}
            alt="img"
            className="rounded-lg mr-4 md:w-1/2 lg:hidden xl:hidden 2xl:hidden md:hidden sm:w-2/2  "
          />
          <h1 className="text-green-600 underline decoration-dashed  text-3xl text-right mb-4 tracking-wide sm:mt-5">
            مكتبة الأمان
          </h1>
          <p className="text-right text-1xl font-bold text-black-700 md:text-sm">
            نرحب بكم في متجرنا! نحن نقدم مجموعة متنوعة من المنتجات والخدمات، بما
            في ذلك الكتب والإلكترونيات ولوازم المكتب والخدمات الرقمية مثل إنشاء
            المواقع وزيادة نمو وسائل التواصل الاجتماعي. نحن نقدم أيضًا خدمات
            الطباعة المختلفة على الأكواب والقبعات والقمصان والوسائد. هل تحتاج
            إلى مساعدة في كتابة بحوث أو عروض مدرسية أو كتابة سيرة ذاتية
            احترافية؟ نحن هنا لنساعدك. يمكن لفريقنا المتخصص أيضًا مساعدتك في
            تحقيق شروط الربحية على اليوتيوب. بفضل سهولة حجز المواعيد عبر
            الإنترنت وتجربة غنية في صناعة الإعلانات، .نحن مكانك الوحيد لتلبية
            جميع احتياجاتك. تفضل بزيارتنا
          </p>
        </div>
      </div>
      <div className="flex items-center p-8 sm:flex-col">
        <div className="ml-4">
          <h1 className="text-green-500  text-7xl mb-4 md:text-4xl sm:text-3xl sm:text-center">
            School Supplies
          </h1>
          <img
            src={IMG1}
            alt="img"
            className="rounded-lg md:w-1/2 lg:hidden xl:hidden 2xl:hidden md:hidden"
          />
          <h1 className="text-green-600 underline decoration-dashed sm:mt-5 text-3xl text-right mb-4 tracking-wide">
            اللوازم المدرسية
          </h1>
          <p className="text-right text-1xl font-bold text-black-700 md:text-sm">
            هل تبحث عن لوازم مدرسية عالية الجودة بأسعار معقولة؟ نحن هنا
            لمساعدتك! يوفر متجرنا مجموعة واسعة من اللوازم المدرسية، بما في ذلك
            الدفاتر والأقلام والمجلدات وأكثر من ذلك. سواء كنت تبحث عن لوازم
            مدرسية للمدرسة أو الجامعة، فإننا نضمن لك الحصول على أفضل جودة بأسعار
            تناسب ميزانيتك. تفضل بزيارتنا اليوم وتسوق لوازم مدرسية عالية الجودة
            بأسعار مناسبة
          </p>
        </div>
        <img src={IMG1} alt="img" className="rounded-lg md:w-1/2 sm:hidden" />
      </div>
      <div className="bg-gray-100 flex items-center p-8">
        <img
          src={IMG3}
          alt="img"
          className="rounded-lg mr-4 md:w-1/2 sm:hidden "
        />
        <div>
          <h1 className="text-green-500  text-7xl mb-4 md:text-4xl sm:text-3xl sm:text-center">
            Printing
          </h1>
          <img
            src={IMG4}
            alt="img"
            className="rounded-lg mr-4 md:w-1/2 lg:hidden xl:hidden 2xl:hidden md:hidden"
          />
          <h1 className="text-green-600 underline decoration-dashed sm:mt-5  text-3xl text-right mb-4 tracking-wide ">
            الطباعة
          </h1>
          <p className="text-right text-1xl font-bold text-black-700 md:text-sm">
            بحاجة إلى نسخ وثائقك بسرعة وسهولة؟ جهاز النسخ الخاص بنا هو ما
            تحتاجه! يمكنك الآن الحصول على نسخ عالية الجودة لأي وثيقة تحتاج إليها
            بسرعة وكفاءة، سواء كانت وثائق مدرسية أو ملفات عمل. بفضل جهاز النسخ
            الخاص بنا، ستحصل على نسخ واضحة ودقيقة
          </p>
        </div>
      </div>

      <footer class="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
        <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © Copyright: AL AMANE
        </div>
      </footer>
    </div>
  );
}

export default Home;
