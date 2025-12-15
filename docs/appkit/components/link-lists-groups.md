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
