---
description: ساخته شده با استفاده از سیستم collapse بوت استرپ
---

# آکاردئون

## آکاردئون معمولی

هر آکاردئونی که در صفحه component-accordions.html موجو است تا حدودی توضیح داده شده است، اما صفحه را نیز بررسی کنید و با کپی پیست و استفاده از این راهنما، از آن استفاده کنید.

<!-- prettier-ignore -->
```html showLineNumbers
<div class="accordion" id="accordion-1">
    <div>
        <button class="btn accordion-btn no-effect" data-bs-toggle="collapse" data-bs-target="#collapse1">
            <i class="fa fa-heart color-red2-dark mr-2"></i>
            Accordion Title 1
            <i class="fa fa-plus font-10 accordion-icon"></i>
        </button>
        <div id="collapse1" class="collapse" data-parent="#accordion-1">
              <!-- add your content here -->
        </div>
    </div>
</div>
```

**خط 1** div را به عنوان آکاردئون تعریف میکند و آی دی برای هدف قرار دادن عناصر استفاده میشود، بنابراین یکی با باز شدن دیگری بسته می‌شود.

**خط 2 تا 11** المان آکاردئون است. برای ایجاد یک مورد جدید، آن را را کپی کنید.

**خط 3** دکمه آکاردئونی است که برای باز شدن باید روی آن ضربه بزنید. توجه داشته باشید که این دکمه دارای `data-bs-toggle="collapse"` است که توسط جاوا اسکریپت برای تعریف این المان به عنوان یک المان جمع‌ شونده مورد نیاز است. `data-bs-target="#collapse1"` باید با آی دی div که قرار است جمع یا باز شود، یکسان باشد، که در این جا در خط 8 است. حتماً کلاس `no-effect` را اضافه کنید تا آیکون نچرخد.

**خط 4** آیکون FontAwesome مورد نظر شما است.

**خط 5** متن دکمه آکاردئون است.

**خط 6** آیکون سمت راست دکمه آکاردئون است

**خط 8,9,10** محتوای آکاردئونی است که هنگام ضربه زدن روی دکمه نمایش داده میشود. این باید آی دی مشابه با دکمه `data-target` داشته باشد و `data-parent` آن نیز باید با داده موجود در خط 1 یکسان باشد تا آکاردئون بداند که اگر روی دکمه دیگری ضربه بزنید، اولی را ببندد.

برای ایجاد دکمه‌های آکاردئونی بیشتر، کافی است خطوط 2 تا 11 را کپی کنید و `#collapse1` را در خط 3 و خط 8 را با یک نام منحصر به فرد جایگزین کنید.

## آکاردئون رنگی

<!-- prettier-ignore -->
```html showLineNumbers
<div class="accordion" id="accordion-1">
    <div class="card card-style shadow-0 bg-highlight">
        <button class="btn accordion-btn no-effect" data-bs-toggle="collapse" data-bs-target="#collapse1">
            <i class="fa fa-heart color-red2-dark mr-2"></i>
            Accordion Title 1
            <i class="fa fa-plus font-10 accordion-icon"></i>
        </button>
        <div id="collapse1" class="collapse bg-theme" data-parent="#accordion-1">
              <!-- add your content here -->
        </div>
    </div>
</div>
```

آکاردئون رنگی دقیقاً بر اساس نسخه معمولی با استثنائات زیر کار میکند\
دکمه آکاردئون در خط 3 اکنون در کارتی پیچیده شده است که رنگ پس‌زمینه آن ضمیمه شده است، و محتوای آکاردئون در خط 8 دارای کلاس `bg-theme` است تا در پس‌زمینه صفحه بماند.

## کارت های آکاردئون

این کارت بر اساس همان المان کارت کار میکند، اما، دکمه اکنون یک کارت پس زمینه است، همانطور که در فصل کارت ها توضیح داده خواهد شد.
