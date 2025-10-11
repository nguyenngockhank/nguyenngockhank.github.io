# Analog & Digital 

## Analog 

**Analog** means “continuous” — both in **time** and **value**. 

An analog signal can take **any value** within a range, at **any moment** in time.

It’s smooth, **infinitely detailed**, and mirrors physical reality directly.

All physical quantities (sound, light, temperature, pressure, radio waves) are **continuous signals**.

### Examples 

**Analog in Real Life**

Field  | 	Desc 	
------ |--------
Sound |	Sound waves are analog changes in air pressure.
Electric signal	| Microphone output is an analog voltage changing with sound.	
Temperature sensor |	Produces continuous voltage depending on heat.
Old TV/radio	| Uses continuous frequency and amplitude to send info.	
Light intensity |	A dimmer switch changes brightness smoothly.	


**Analog in Modern Technologies**

Area	| Role of Analog
------ |--------
Audio recording	| Capturing sound as voltage variations
Wireless communication |	Radio waves (analog carriers)
Sensors / IoT	| Convert physical signals to voltages
Power electronics |	Control continuous voltage/current
Display / Audio output	| Convert digital data to analog for human senses

→ The human world (ears, eyes, touch) only understands **analog signals**, so every digital system must eventually go analog at the output.

### Characteristics

- **Continuity**:  Infinite possible values	
- **Realism**:	Closely represents physical world
- **Noise sensitivity**:	Easily affected by interference	
- **No quantization error**:	No rounding — exact wave	
- **Difficult to copy**:	Quality degrades with duplication	

Analog signals can carry **infinite detail**, but because they are physical (voltage, current, wave), they are **vulnerable to noise**, distortion, and signal loss.




## Analog & Digital 

### Digital  

Digital means information is represented by **numbers (0 and 1)**.

Instead of a smooth wave, the sound is **sampled** many times per second and stored as a **series of values**.

### Technologies 

Technology | 	Analog Part | 	Digital Part
--------- | ------------- | ----------
Wi-Fi |	Uses 2.4GHz or 5GHz analog radio waves	| Transmits digital packets (0s/1s) via modulation (OFDM)
Bluetooth	| Uses analog radio wave |	Sends digital data via frequency hopping
RFID| 	Tag communicates by analog electromagnetic field |	Data in the tag is digital
Mobile (4G/5G)| 	Uses analog carrier wave |	Transmits digital symbols encoded (QAM, OFDM)
FM Radio (traditional)|	Entirely analog (sound modulates frequency) |	No digital data (except RDS in modern systems)


Aspect	| Analog | 	Digital
--------- | ------------ | -------------
Nature	        | Continuous wave       |	Discrete steps (0,1)
Representation |	Real-world signal	| Encoded numbers
Quality	| Natural, full detail	        | Precise but sampled
Noise	| Sensitive	                    | Resistant
Copying     | Degrades	                | Perfect reproduction
Processing	| Hard (needs analog circuits) |	Easy (software, CPU)


## Data acquisition system

1. Sensor detects physical quantity → outputs weak analog signal. (Signal Acquisition)
2. Amplifier boosts the signal to usable level. (Signal Amplification)
3. Filter (anti-aliasing) removes unwanted high frequencies.
4. ADC (Analog-to-Digital Converter) samples and digitizes it.oise.


::: tip 
According to the Nyquist theorem, you must sample **at least 2× the highest frequency** present in the signal.

For example, for 20 kHz audio → sample ≥ 40 kHz (so we use 44.1 kHz). 

The typical human hearing range is from 20 Hz to 20,000 Hz (20 kHz).
:::

## Analog-to-Digital Converters (ADCs)

For sound 

### Step 1: Sampling

- The analog signal (a continuous wave) is measured at **regular time intervals**.
- Each measurement is called a sample.
- The number of samples per second is called the **sampling rate** (measured in Hertz, Hz).

Example: CD audio uses **44,100 samples per second (44.1 kHz)** → enough to capture all frequencies humans can hear (up to `~20 kHz`).


### Step 2: Quantization

- Each sample’s amplitude (signal strength) is rounded to the nearest digital value.
- The precision depends on **bit depth** (e.g. 8-bit, 16-bit, 24-bit).
    - 8-bit → 256 levels
    - 16-bit → 65,536 levels
    - 24-bit → 16.7 million levels

> The higher the bit depth → the more detailed the sound, less noise.

### Step 3: Encoding

- After sampling and quantization, each sample is stored as a binary number (0s and 1s).
- These binary values are then **organized into a digital file format** (like WAV, FLAC, MP3).

## Electromagnetic waves

An **electromagnetic wave (EM wave)** is a wave that carries **energy through electric and magnetic fields** that oscillate (vibrate) **perpendicularly** to each other and to the direction the wave travels.


**Structure**

```
           ↑ Electric Field (E)
           |
           |        ↗ Wave direction
           |       /
-----------•----------------→
           |
           ↓ Magnetic Field (B)
```

- The **Electric field** (E) and **Magnetic field** (B) keep generating each other while moving forward.
- **No physical medium (like air or water) is required** — EM waves can travel in **vacuum**.


### Sound wave vs Light wave

Property | Sound wave | Light / EM wave
-------- | ---------- | -------
Nature  | Mechanical wave | Electromagnetic wave
Required physical medium | Yes | No
Type of vibration | Molecular vibration of matter (compression & expansion) | **Electric field** (E) and **Magnetic field** (B)
Frequency unit | Hz  | Hz 
Speed | ≈ 343 m/s | ≈ 3 × 10⁸ m/s
Frequency range | 20 Hz – 20 kHz (hearable) | ~4 × 10¹⁴ – 7.5 × 10¹⁴ Hz (seeable)
Wavelength | cm -> m |  400-700nm (super short)
Use cases | Voices, music, supersonic | light, Wifi, X-ray

### Frequency vs. Wavelength 

::: tip Formula
> v ​= λf => f = v / λ

- v: wave speed
- λ: wavelength
- f: frequency
::: 

- Higher frequency → shorter wavelength → shorter range but **more data per second**.
- Lower frequency → longer wavelength → longer range but less data.

### Technogies in Comparion



#### TV Broadcast
Technology	| Frequency Band	| Range	| Note
-------------- | ---------------- | -----------   | -----------
Analog TV |  30 – 300 MHz (VHF)| ~60 – 100 km  | 
Analog TV | 470 – 890 MHz (UHF) | ~30 – 60 km  | more quality  
Digital TV | 470 – 700 MHz (UHF) |  ~30 – 80 km  | COFDM => stable quality
Satellite TV | 10 – 12 GHz (Ku band) or 3.7 – 4.2 GHz (C band) |  global or  continent 

#### RFID 

Technology	| Frequency Band	| Range	| Data Rate | 	Typical Use
-------------- | ---------------- | -----------   | ----------- | -------
RFID ( LF) | 125–134 kHz	 | < 10 cm	 | < 10 kbps |	Animal tags, access control
RFID (HF) |	13.56 MHz	| < 1 m	~| 100 kbps	 | Smart cards, library tags
RFID (UHF) | 860–960 MHz |	1–12 m |	~100 kbps|	Inventory tracking, logistics
NFC	| 13.56 MHz (same as HF RFID) |	< 10 cm	 | ~424 kbps |	Contactless payment, card emulation

#### GPS 

Signal Name	| Frequency (MHz) |	Used by	| Explanation
---------- | -------- | ------- | -------- 
L1	| 1575.42 MHz	|  Civilian (public GPS) | phones, cars, planes, ....
L2	| 1227.60 MHz	|  Military & high-precision | survey, RTK (Real-Time Kinematics)
L5	| 1176.45 MHz	|  Civil aviation & advanced GPS | new frequency, anti noise
L3, L4	| 1381.05 / 1379.91 MHz	|  Military, experimental	| 
L6 (Japan QZSS) | 	1278.75 MHz | 	Regional augmentation	| like Japan, India


#### Wifi 
Different Wi-Fi standards (like 802.11a/b/g/n/ac/ax) use **different frequency bands** to transmit data.

Wi-Fi Standard	| Frequency Band	| Typical Use / Note
-------------- | ---------------- | --------------------
2.4 GHz band|	2.400 – 2.4835 GHz	| Longer range, slower speed, more interference (shared with Bluetooth, microwave ovens)
5 GHz band |	5.150 – 5.825 GHz (varies by country)	| Higher speed, shorter range, less interference
6 GHz band (Wi-Fi 6E)	|5.925 – 7.125 GHz  |	Very high speed, many channels, needs new devices
60 GHz (Wi-Gig / 802.11ad/ay) |	57 – 71 GHz	| Extremely high speed, very short range (used for VR, wireless HDMI)


#### Others 

Technology	| Frequency Band	| Range	| Data Rate | 	Typical Use
-------------- | ---------------- | -----------   | ----------- | -------
Microwave oven |  2.45 GHz |  N/A | 
FM Radio | 	88 – 108 MHz | Up to ~100 km |
Cellular 4G | ~700 MHz – 2.6 GHz | 	1–10 km (per cell tower)
Wi-Fi	| 2.4 GHz, 5 GHz, 6 GHz, 60 GHz | 	~10–100 m	|  Up to several Gbps | 	Internet, local networking
Bluetooth (Classic/LE) | 	2.4 GHz ISM band	|  ~1–100 m (depending on version & power) | 	Up to ~2 Mbps (LE) or ~3 Mbps (Classic)  |	Audio, wearables, IoT, peripherals


### Range

**Why NFC and HF RFID have the same frequency (13.56 MHz) but different range?**

NFC and HF RFID use the **same frequency**: 13.56 MHz, so their wavelength is the same (~22 meters). But — **the communication mechanism** is completely different:

Aspect	| HF RFID  | 	NFC
------- | -------- | ------
Power source |	The reader (antenna) sends strong electromagnetic field to energize passive tags (no battery). |	Both devices (like phone ↔ POS) are active, each has power.
Coupling method	| Inductive coupling (magnetic field dominates). |	Mutual inductive coupling (two powered coils exchange data).
Communication directio| 	Usually one-way (reader → tag).	| Two-way (peer-to-peer).
Field strength / Power |	Reader uses higher power (~1–2 W).	| FC uses much lower power (~100 mW).
Protocol behavior |	Optimized for longer detection (up to ~1 m).	| Optimized for secure, short-range (~4–10 cm).



::: tip Friis Transmission Equation

> Pr ​= Pt ​+ Gt ​+ Gr  ​− Lp​

More detail: 

> Pr​ = Pt ​+ Gt​ + Gr ​+ 20log<sub>10​</sub>( λ / 4πd)

- Pr: Received power (dBm)
- Pt: Transmitted power (dBm)
- Gt, Gr: Antenna gains (dBi)
- λ: Wavelength
- d: Distance (m)
- Lp​: Path loss
:::

**Simplified Insight**

Factor | Effect on Range 
------- | --------- 
Frequency  |	Higher frequency → shorter range, because high-frequency waves lose energy faster and are absorbed more easily.
Transmit Power | More power → longer range, but limited by safety laws and regulations.
Antenna Gain  |	More focused antenna beam → longer effective distance.
Environment  |	Walls and obstacles reduce range, while open outdoor space allows much farther reach.
Receiver Sensitivity |	Higher sensitivity → can detect weaker signals → increases range.

### Chặn sóng 

Phương pháp	| Mô tả kỹ thuật | 	Ứng dụng 
----------- | ------------- | -------------------
Faraday Cage (Lồng kim loại)  | Dùng vật dẫn điện bao kín (như lưới đồng, thép) để hấp thụ và phản xạ sóng.  | 	Phòng thí nghiệm EMI/EMC, lò vi sóng, thang máy, phòng an toàn dữ liệu.
Vật liệu hấp thụ sóng |	Dùng vật liệu ferrite, carbon hoặc foam đặc biệt để hấp thụ năng lượng RF thay vì phản xạ.	| sssGiảm nhiễu sóng trong thiết bị điện tử, phòng đo sóng.
Sơn hoặc màng chắn sóng | Sơn chứa hạt kim loại hoặc phủ film dẫn điện trên tường/kính để chặn sóng radio | Bảo vệ phòng họp, phòng y tế (MRI), hoặc khu nghiên cứu.
Directional Antenna Design |	Dùng anten định hướng để giảm phát tán sóng ra ngoài vùng cần thiết. | Quản lý sóng Wi-Fi, radar, hoặc truyền thông riêng tư.
Frequency Filtering (Lọc tần số) | Dùng mạch lọc hoặc tường chắn chọn lọc tần số muốn cho qua. |	Bảo vệ thiết bị khỏi nhiễu tần số không mong muốn.
Security Jamming |  the transmission of electromagnetic energy to **degrade**, **deny**, or **deceive** an adversary’s use of the *electromagnetic spectrum* (radios, radars, GPS, communications, etc.) | DONT