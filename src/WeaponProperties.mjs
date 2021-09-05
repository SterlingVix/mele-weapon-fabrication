const getFireMode = (fireMode) => ({
  auto: 'FireMode_FullAuto',
  ramp: 'FireMode_Ramping',
  ramping: 'FireMode_Ramping',
  semi: 'FireMode_SemiAuto',
});
const getFiringShake = (firingShakeName) => {
  return {
    0: 'FiringShake0',
  }[firingShakeName];
};
const getString = (tlkId) => {
  const idWithBling = `$${tlkId}`;
  return {
    '$0': 'some string',
  }[tlkId];
};

// Begin Object class=SkeletalMeshComponent Name=oSkeletalMeshComponent; ReplacementPrimitive = None

class BioDamageType {
  Name = pDefaultDamage;
  Begin;
  Object;
  class = BioAttributesDamage;
  Name = s_pAttributes;
  End;
  Object;
  m_pAttributes = s_pAttributes;
  End;
  Object;
}

// class ForceFeedbackWaveform {
//     Name=FireRumble0;
//     Name=OverheatRumble0
//     Samples = ((Duration = 0.119999997, LeftAmplitude = 30, RightAmplitude = 30, LeftFunction = EWaveformFunction.WF_LinearDecreasing, RightFunction = EWaveformFunction.WF_LinearDecreasing))
// }

class SFXCameraShakeBase {
  Name = FiringShake0; // Name=TightAimFiringShake0;
  TheShake = {
    RotAmplitude: {X: 30.0, Y: 20.0, Z: 10.0}, // { X: 60.0, Y: 30.0, Z: 15.0 },
    RotFrequency: {X: 30.0, Y: 15.0, Z: 8.0},  // { X: 80.0, Y: 80.0, Z: 80.0 },
    TimeDuration: 0.200000003,
  };
}

const MaleWeaponAnimSets = [
  'AnimSet\'BIOG_HMM_CB_A.HMM_CB_ShotgunHolster\'',
  'AnimSet\'BIOG_HMM_DG_A.HMM_DG_Rifle\'',
  'AnimSet\'BIOG_HMM_CB_A.HMM_CB_Rifle\'',
  'AnimSet\'BIOG_HMM_CB_A.HMM_CB_RifleAuto\'',
  'AnimSet\'BIOG_HMM_CB_A.HMM_CB_RifleCover\'',
];
const PelletSpread = [
  {X: 0.0, Y: 0.0},
  {X: -240.0, Y: 415.0},
  {X: -480.0, Y: 0.0},
  {X: -240.0, Y: -415.0},
  {X: 240.0, Y: -415.0},
  {X: 480.0, Y: 0.0},
  {X: 240.0, Y: 415.0},
];
const AccFireInterpSpeed = 0.0; // AccFireInterpSpeed = 40.0
const AccFirePenalty = 0.0; // AccFirePenalty = 35.0
const AimError = {X: 1.3, Y: 2.5}; // AimError = (X = 1.29999995, Y = 2.5)
const bOverrideAnimsets = true;
const bRemapAccToRecoil = true;
const bScaleFireAnimByFireRate = true;
const Components = (oSkeletalMeshComponent); // Components = (oSkeletalMeshComponent)
const DamageRange = {X: 40, Y: 70}; // DamageRange = (X = 67.1999969, Y = 110.400002)
const Description = $184320; // Description = $184334 <-- TLK ID?
const DrawAnimset = 'AnimSet\'BIOG_HMM_CB_A.HMM_CB_ShotgunDraw\''; // DrawAnimset = AnimSet'BIOG_HMM_CB_A.HMM_CB_ShotgunDraw'
const FemaleWeaponAnimSets = 'AnimSet\'BIOG_HMF_EX_A.HMF_EX_Rifle\''; // FemaleWeaponAnimSets = (AnimSet'BIOG_HMF_EX_A.HMF_EX_Rifle')
const FireMode = getFireMode('auto');
const FiringShake = getFiringShake(0); // FiringShake = FiringShake0
const HeadshotDamageMultiplier = 0.0; // HeadshotDamageMultiplier = 2.0
const HeatLossRateRange = {X: 0.25, Y: 0.25}; // HeatLossRateRange = (X = 0.324999988, Y = 0.349999994)
const HeatPerShotRange = {X: 0.294999987, Y: 0.25}; // HeatPerShotRange = (X = 0.0820999965, Y = 0.0680000037)
const m_bIsMuzzleFlashVFXEnabled = true;
const m_bShootingWhileOverheatedSoundPlayed = true;
const m_fOverlapRecurseBreakoutDistance = 0.0; // m_fOverlapRecurseBreakoutDistance = 50.0
const m_fProjectilesSpreadModifier = 0.0; // m_fProjectilesSpreadModifier = 0.200000003
const m_fSniperFireDistance = 0.0; // m_fSniperFireDistance = 40000.0
const m_fVehicleFireDistance = 0.0; // m_fVehicleFireDistance = 60000.0
const m_fWeaponFireDistance = 0.0; // m_fWeaponFireDistance = 20000.0
const m_ImpactParameterName = {}; // m_ImpactParameterName = 'Impact'
const m_MuzzleCamSocketName = 'MuzzleCam';
const m_MuzzleSocketName = 'Flash';
const m_nCloseStripLength = 0.0; // m_nCloseStripLength = 1500.0
const m_nTotalNumberCloseStrips = 0; // m_nTotalNumberCloseStrips = 2
const m_nTotalNumberStrips = 0; // m_nTotalNumberStrips = 10
const m_pDamage = 'pDefaultDamage'; // m_pDamage = pDefaultDamage
const m_SourceParameterName = 'Source'; // m_SourceParameterName = 'Source'
const Mesh = 'oSkeletalMeshComponent'; // Mesh = oSkeletalMeshComponent
const MinPelletsForPhysics = 0; // MinPelletsForPhysics = 4
const PortArmsAssaultDistance = 0.0; // PortArmsAssaultDistance = 10.0
const PortArmsPistolDistance = 0.0; // PortArmsPistolDistance = 15.0
const PortArmsShotgunDistance = 0.0; // PortArmsShotgunDistance = 10.0
const PortArmsSniperDistance = 0.0; // PortArmsSniperDistance = 35.0
const RampFirePct = 0.0; // RampFirePct = 0.5
const RampFireTime = 0.0; // RampFireTime = 1.79999995
const RateOfFire = 0.0; // RateOfFire = 400.0
const Recoil = 0.0; // Recoil = 0.5
const RecoilFadeSpeed = 0.0; // RecoilFadeSpeed = 1.10000002
const RecoilYawFrequency = 0.0; // RecoilYawFrequency = 1.0
const RecoilYawScale = 0.0; // RecoilYawScale = 0.2500000001
const RecoilZoomFadeSpeed = 0.0; // RecoilZoomFadeSpeed = 1.29999995
const SkelMeshComp = 'oSkeletalMeshComponent';
const TightAimFiringShake = 'TightAimFiringShake0';
const UIDPSFudgeFactor = 0.0; // UIDPSFudgeFactor = 1.20000005
const WeaponFireRumble = 'FireRumble0';
const WeaponOverheatedRumble = 'OverheatRumble0';
const ZoomAccFireInterpSpeed = 0.0; // ZoomAccFireInterpSpeed = 40.0
const ZoomAccFirePenalty = 0.0; // ZoomAccFirePenalty = 35.0
const ZoomAimError = {X: 2.0, Y: 2.0}; // ZoomAimError = (X = 4.5, Y = 6.5)
const ZoomRecoil = 0.0; // ZoomRecoil = 0.800000012

