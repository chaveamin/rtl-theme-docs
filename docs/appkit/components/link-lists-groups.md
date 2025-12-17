---
description: ساخته شده با استفاده از سیستم گروه‌های فهرست بوت‌استرپ
sidebar_position: 22
---

# لینک های گروهی و لیستی

همانطور که در [مستندات بوت‌استرپ](https://getbootstrap.com/docs/5.3/components/list-group/) نشان داده شده است، میتوان از گروه های لیست بوت استرپ استفاده کرد. با این حال، برای اینکه طراحی قالب بیشتر در موضوع با سبک آن حفظ شود، میتوانید از نمونه های زیر استفاده کنید. اینها از همان کلاس بوت استرپ استفاده میکنند، اما ویژگی های طراحی بیشتری را ارائه میدهند و همچنین با [سویچ ها](/appkit/components/toggles-switches) سازگار هستند.

## ایجاد گروه لیست / لیست لینک

لیست لینک، لیستی از موارد است که شامل یک خط متن یا یک خط توضیحات ثانویه با آیکونی در سمت چپ و راست است. استفاده از آن بسیار ساده است و از کلاس های کمکی برای رنگ ها پشتیبانی میکند و همچنین از نشان ها و [سوئیچ ها](/appkit/components/toggles-switches) نیز پشتیبانی میکند.

```html showLineNumbers
<div class="list-group list-custom-SIZE_VALUE">
  <a href="#">
    <i class="fa font-14 fa-cog color-brown1-dark"></i>
    <span>Ultra Mobile</span>
    <strong>Only use this line for large</strong>
    <i class="fa fa-angle-right"></i>
  </a>
  <a href="#">
    <i class="fa font-14 fa-bars rounded-xl shadow-xl bg-blue2-dark"></i>
    <span>Azures Mobile</span>
    <strong>Only use this line for large</strong>
    <span class="badge bg-red2-dark font-10">$25</span>
    <i class="fa fa-angle-right"></i>
  </a>
  <a href="#">
    <i class="fa font-14 fa-check rounded-sm shadow-m bg-green1-dark"></i>
    <span>AppKit Mobile</span>
    <strong>Only use this line for large</strong>
    <span class="badge bg-green1-dark">FRESH</span>
    <i class="fa fa-angle-right"></i>
  </a>
  <a data-trigger-switch="switch-1" class="border-0" href="#">
    <i class="fa font-14 fa-star shadow-s bg-yellow1-dark"></i>
    <span>Kolor Mobile</span>
    <strong>Only use this line for large</strong>
    <div class="custom-control scale-switch ios-switch">
      <input type="checkbox" class="ios-input" id="switch-1" />
      <label class="custom-control-label" for="switch-1"></label>
    </div>
    <i class="fa fa-angle-right"></i>
  </a>
</div>
```

کد بالا یک گروه لیست ایجاد میکند، بیایید خط به خط آن را توضیح دهیم.

**خط 1** لیست را به عنوان یک گروه لیست و همچنین اندازه آن را تعریف میکند. میتوانید `SIZE_VALUE` را با `small` یا `large` جایگزین کنید. اگر اندازه را **بزرگ** انتخاب کنید، میتوانید از خطوط **5,11,18,28** استفاده کنید. در غیر این صورت این خطوط را حذف کنید.

**خطوط 2 تا 7** یک لیست با یک آیکون رنگی ایجاد میکنند. - آیکون Fontawesome است و از `color-VALUE` موجود در رنگ ها در [بخش رنگ ها](/appkit/color-highlights-backgrounds#%DA%86%D9%87-%D8%B1%D9%86%DA%AF-%D9%87%D8%A7%DB%8C%DB%8C-%D8%A8%D9%87-%D8%B7%D9%88%D8%B1-%D9%BE%DB%8C%D8%B4%D9%81%D8%B1%D8%B6-%DA%AF%D9%86%D8%AC%D8%A7%D9%86%D8%AF%D9%87-%D8%B4%D8%AF%D9%87-%D8%A7%D8%B3%D8%AA) استفاده میکند. آخرین آیکون در این مورد یک فلش ساده به سمت راست است.

**خطوط 8 تا 14 و 15 تا 21،** بر اساس همان اصل قبلی کار میکند، به استثنای آیکون، که اکنون دارای کلاس های کمکی برای حاشیه های گرد و نشان است. نشان یک کلاس span با رنگ پس زمینه و اندازه فونت است. این میتواند برای نشان دادن قیمت، فکت ها، ویژه یا سایر پیام های کوچک، استفاده شود.

**خطوط 22 تا 31** مانند خطوط قبلی کار میکنند، با این استثنا که یک سوئیچ در آن قرار دارد. شما میتوانید همه چیز را در مورد سوئیچ ها در [بخش سوئیچ ها](/appkit/components/toggles-switches) بیاموزید. سوئیچ توسط لیست و همچنین با استفاده از `data-trigger="unique-number"` که با آی دی اینپوت سوئیچ مطابقت دارد فعال میشود.

برای درک بهتر گروه‌های فهرست، **component-link-lists.html** را بررسی کنید، جایی که همه این‌ها توضیح داده شده اند.
