export const getFireMode = (fireMode) => ({
  auto: 'FireMode_FullAuto',
  ramp: 'FireMode_Ramping',
  ramping: 'FireMode_Ramping',
  semi: 'FireMode_SemiAuto',
});
export const getFiringShake = (firingShakeName) => {
  return {
    0: 'FiringShake0',
  }[firingShakeName];
};
export const getString = (tlkId) => {
  export const idWithBling = `$${tlkId}`;
  return {
    '$0': 'some string',
  }[tlkId];
};
export const xyz = (xVal, yVal, zVal) => ({
  X: xVal,
  Y: yVal,
  ...zVal === undefined
    ? {}
    : { Z: zVal },
});

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
    RotAmplitude: xyz(30.0, 20.0, 10.0), // { X: 60.0, 30.0, Z: 15.0 },
    RotFrequency: xyz(30.0, 15.0, 8.0),  // { X: 80.0, 80.0, Z: 80.0 },
    TimeDuration: 0.200000003,
  };
}

export const MaleWeaponAnimSets = [
  'AnimSet\'BIOG_HMM_CB_A.HMM_CB_ShotgunHolster\'',
  'AnimSet\'BIOG_HMM_DG_A.HMM_DG_Rifle\'',
  'AnimSet\'BIOG_HMM_CB_A.HMM_CB_Rifle\'',
  'AnimSet\'BIOG_HMM_CB_A.HMM_CB_RifleAuto\'',
  'AnimSet\'BIOG_HMM_CB_A.HMM_CB_RifleCover\'',
];
export const PelletSpread = [
  xyz(0.0, 0.0),
  xyz(-240.0, 415.0),
  xyz(-480.0, 0.0),
  xyz(-240.0, -415.0),
  xyz(240.0, -415.0),
  xyz(480.0, 0.0),
  xyz(240.0, 415.0),
];
export const AccFireInterpSpeed = 0.0; // AccFireInterpSpeed = 40.0
export const AccFirePenalty = 0.0; // AccFirePenalty = 35.0
export const AimError = xyz(1.3, 2.5); // AimError = (X = 1.29999995, Y = 2.5)
export const bOverrideAnimsets = true;
export const bRemapAccToRecoil = true;
export const bScaleFireAnimByFireRate = true;
export const Components = (oSkeletalMeshComponent); // Components = (oSkeletalMeshComponent)
export const DamageRange = xyz(40, 70); // DamageRange = (X = 67.1999969, Y = 110.400002)
export const Description = $184320; // Description = $184334 <-- TLK ID?
export const DrawAnimset = 'AnimSet\'BIOG_HMM_CB_A.HMM_CB_ShotgunDraw\''; // DrawAnimset = AnimSet'BIOG_HMM_CB_A.HMM_CB_ShotgunDraw'
export const FemaleWeaponAnimSets = 'AnimSet\'BIOG_HMF_EX_A.HMF_EX_Rifle\''; // FemaleWeaponAnimSets = (AnimSet'BIOG_HMF_EX_A.HMF_EX_Rifle')
export const FireMode = getFireMode('auto');
export const FiringShake = getFiringShake(0); // FiringShake = FiringShake0
export const HeadshotDamageMultiplier = 0.0; // HeadshotDamageMultiplier = 2.0
export const HeatLossRateRange = xyz(0.25, 0.25); // HeatLossRateRange = (X = 0.324999988, Y = 0.349999994)
export const HeatPerShotRange = xyz(0.294999987, 0.25); // HeatPerShotRange = (X = 0.0820999965, Y = 0.0680000037)
export const m_bIsMuzzleFlashVFXEnabled = true;
export const m_bShootingWhileOverheatedSoundPlayed = true;
export const m_fOverlapRecurseBreakoutDistance = 0.0; // m_fOverlapRecurseBreakoutDistance = 50.0
export const m_fProjectilesSpreadModifier = 0.0; // m_fProjectilesSpreadModifier = 0.200000003
export const m_fSniperFireDistance = 0.0; // m_fSniperFireDistance = 40000.0
export const m_fVehicleFireDistance = 0.0; // m_fVehicleFireDistance = 60000.0
export const m_fWeaponFireDistance = 0.0; // m_fWeaponFireDistance = 20000.0
export const m_ImpactParameterName = {}; // m_ImpactParameterName = 'Impact'
export const m_MuzzleCamSocketName = 'MuzzleCam';
export const m_MuzzleSocketName = 'Flash';
export const m_nCloseStripLength = 0.0; // m_nCloseStripLength = 1500.0
export const m_nTotalNumberCloseStrips = 0; // m_nTotalNumberCloseStrips = 2
export const m_nTotalNumberStrips = 0; // m_nTotalNumberStrips = 10
export const m_pDamage = 'pDefaultDamage'; // m_pDamage = pDefaultDamage
export const m_SourceParameterName = 'Source'; // m_SourceParameterName = 'Source'
export const Mesh = 'oSkeletalMeshComponent'; // Mesh = oSkeletalMeshComponent
export const MinPelletsForPhysics = 0; // MinPelletsForPhysics = 4
export const PortArmsAssaultDistance = 0.0; // PortArmsAssaultDistance = 10.0
export const PortArmsPistolDistance = 0.0; // PortArmsPistolDistance = 15.0
export const PortArmsShotgunDistance = 0.0; // PortArmsShotgunDistance = 10.0
export const PortArmsSniperDistance = 0.0; // PortArmsSniperDistance = 35.0
export const RampFirePct = 0.0; // RampFirePct = 0.5
export const RampFireTime = 0.0; // RampFireTime = 1.79999995
export const RateOfFire = 0.0; // RateOfFire = 400.0
export const Recoil = 0.0; // Recoil = 0.5
export const RecoilFadeSpeed = 0.0; // RecoilFadeSpeed = 1.10000002
export const RecoilYawFrequency = 0.0; // RecoilYawFrequency = 1.0
export const RecoilYawScale = 0.0; // RecoilYawScale = 0.2500000001
export const RecoilZoomFadeSpeed = 0.0; // RecoilZoomFadeSpeed = 1.29999995
export const SkelMeshComp = 'oSkeletalMeshComponent';
export const TightAimFiringShake = 'TightAimFiringShake0';
export const UIDPSFudgeFactor = 0.0; // UIDPSFudgeFactor = 1.20000005
export const WeaponFireRumble = 'FireRumble0';
export const WeaponOverheatedRumble = 'OverheatRumble0';
export const ZoomAccFireInterpSpeed = 0.0; // ZoomAccFireInterpSpeed = 40.0
export const ZoomAccFirePenalty = 0.0; // ZoomAccFirePenalty = 35.0
export const ZoomAimError = xyz(2.0, 2.0); // ZoomAimError = (X = 4.5, Y = 6.5)
export const ZoomRecoil = 0.0; // ZoomRecoil = 0.800000012
