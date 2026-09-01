__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutObservableBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 32
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 34
          }
        ],
        "start": 32,
        "end": 35
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "peek",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 51
                },
                "typeArguments": null,
                "start": 50,
                "end": 51
              },
              "start": 48,
              "end": 51
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 42,
            "end": 52
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "typeArguments": null,
                "start": 61,
                "end": 62
              },
              "start": 59,
              "end": 62
            },
            "start": 57,
            "end": 63
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 77
                    },
                    "typeArguments": null,
                    "start": 76,
                    "end": 77
                  },
                  "start": 74,
                  "end": 77
                },
                "start": 69,
                "end": 77
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 80,
                "end": 84
              },
              "start": 78,
              "end": 84
            },
            "start": 68,
            "end": 85
          }
        ],
        "start": 36,
        "end": 87
      },
      "declare": false,
      "start": 0,
      "end": 87
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutObservable",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 117
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 119
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 118,
            "end": 119
          }
        ],
        "start": 117,
        "end": 120
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "KnockoutObservableBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 151
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 153
                },
                "typeArguments": null,
                "start": 152,
                "end": 153
              }
            ],
            "start": 151,
            "end": 154
          },
          "start": 129,
          "end": 154
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "equalityComparer",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 177
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 182
                    },
                    "typeArguments": null,
                    "start": 181,
                    "end": 182
                  },
                  "start": 179,
                  "end": 182
                },
                "start": 178,
                "end": 182
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 187,
                      "end": 188
                    },
                    "typeArguments": null,
                    "start": 187,
                    "end": 188
                  },
                  "start": 185,
                  "end": 188
                },
                "start": 184,
                "end": 188
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 191,
                "end": 198
              },
              "start": 189,
              "end": 198
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 161,
            "end": 199
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueHasMutated",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 219
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 223,
                "end": 227
              },
              "start": 221,
              "end": 227
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 204,
            "end": 228
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueWillMutate",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 248
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 252,
                "end": 256
              },
              "start": 250,
              "end": 256
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 233,
            "end": 257
          }
        ],
        "start": 155,
        "end": 259
      },
      "declare": false,
      "start": 89,
      "end": 259
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutObservableArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 294
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 296
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 295,
            "end": 296
          }
        ],
        "start": 294,
        "end": 297
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "KnockoutObservable",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 324
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 326
                  },
                  "typeArguments": null,
                  "start": 325,
                  "end": 326
                },
                "start": 325,
                "end": 328
              }
            ],
            "start": 324,
            "end": 329
          },
          "start": 306,
          "end": 329
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "indexOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 343
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchElement",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 360
                    },
                    "typeArguments": null,
                    "start": 359,
                    "end": 360
                  },
                  "start": 357,
                  "end": 360
                },
                "start": 344,
                "end": 360
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fromIndex",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 374,
                    "end": 380
                  },
                  "start": 372,
                  "end": 380
                },
                "start": 362,
                "end": 380
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 383,
                "end": 389
              },
              "start": 381,
              "end": 389
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 336,
            "end": 390
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 400
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 408,
                    "end": 414
                  },
                  "start": 406,
                  "end": 414
                },
                "start": 401,
                "end": 414
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "end",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 422,
                    "end": 428
                  },
                  "start": 420,
                  "end": 428
                },
                "start": 416,
                "end": 428
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 432
                  },
                  "typeArguments": null,
                  "start": 431,
                  "end": 432
                },
                "start": 431,
                "end": 434
              },
              "start": 429,
              "end": 434
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 395,
            "end": 435
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "splice",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 446
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 454,
                    "end": 460
                  },
                  "start": 452,
                  "end": 460
                },
                "start": 447,
                "end": 460
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deleteCount",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 476,
                    "end": 482
                  },
                  "start": 474,
                  "end": 482
                },
                "start": 462,
                "end": 482
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 492
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 494,
                        "end": 495
                      },
                      "typeArguments": null,
                      "start": 494,
                      "end": 495
                    },
                    "start": 494,
                    "end": 497
                  },
                  "start": 492,
                  "end": 497
                },
                "value": null,
                "start": 484,
                "end": 497
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 500,
                    "end": 501
                  },
                  "typeArguments": null,
                  "start": 500,
                  "end": 501
                },
                "start": 500,
                "end": 503
              },
              "start": 498,
              "end": 503
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 440,
            "end": 504
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pop",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 512
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 517
                },
                "typeArguments": null,
                "start": 516,
                "end": 517
              },
              "start": 514,
              "end": 517
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 509,
            "end": 518
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "push",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 527
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 536
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 538,
                        "end": 539
                      },
                      "typeArguments": null,
                      "start": 538,
                      "end": 539
                    },
                    "start": 538,
                    "end": 541
                  },
                  "start": 536,
                  "end": 541
                },
                "value": null,
                "start": 528,
                "end": 541
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 544,
                "end": 548
              },
              "start": 542,
              "end": 548
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 523,
            "end": 549
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shift",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 559
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 563,
                  "end": 564
                },
                "typeArguments": null,
                "start": 563,
                "end": 564
              },
              "start": 561,
              "end": 564
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 554,
            "end": 565
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "unshift",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 577
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 586
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 588,
                        "end": 589
                      },
                      "typeArguments": null,
                      "start": 588,
                      "end": 589
                    },
                    "start": 588,
                    "end": 591
                  },
                  "start": 586,
                  "end": 591
                },
                "value": null,
                "start": 578,
                "end": 591
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 594,
                "end": 600
              },
              "start": 592,
              "end": 600
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 570,
            "end": 601
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reverse",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 613
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 617,
                    "end": 618
                  },
                  "typeArguments": null,
                  "start": 617,
                  "end": 618
                },
                "start": 617,
                "end": 620
              },
              "start": 615,
              "end": 620
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 606,
            "end": 621
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sort",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 630
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "compareFunction",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 653,
                              "end": 654
                            },
                            "typeArguments": null,
                            "start": 653,
                            "end": 654
                          },
                          "start": 651,
                          "end": 654
                        },
                        "start": 650,
                        "end": 654
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 659,
                              "end": 660
                            },
                            "typeArguments": null,
                            "start": 659,
                            "end": 660
                          },
                          "start": 657,
                          "end": 660
                        },
                        "start": 656,
                        "end": 660
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 665,
                        "end": 671
                      },
                      "start": 662,
                      "end": 671
                    },
                    "start": 649,
                    "end": 671
                  },
                  "start": 647,
                  "end": 671
                },
                "start": 631,
                "end": 671
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 674,
                "end": 678
              },
              "start": 672,
              "end": 678
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 626,
            "end": 679
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "replace",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 691
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "oldItem",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 701,
                      "end": 702
                    },
                    "typeArguments": null,
                    "start": 701,
                    "end": 702
                  },
                  "start": 699,
                  "end": 702
                },
                "start": 692,
                "end": 702
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "newItem",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 713,
                      "end": 714
                    },
                    "typeArguments": null,
                    "start": 713,
                    "end": 714
                  },
                  "start": 711,
                  "end": 714
                },
                "start": 704,
                "end": 714
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 717,
                "end": 721
              },
              "start": 715,
              "end": 721
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 684,
            "end": 722
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "remove",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 733
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 740,
                      "end": 741
                    },
                    "typeArguments": null,
                    "start": 740,
                    "end": 741
                  },
                  "start": 738,
                  "end": 741
                },
                "start": 734,
                "end": 741
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 745
                  },
                  "typeArguments": null,
                  "start": 744,
                  "end": 745
                },
                "start": 744,
                "end": 747
              },
              "start": 742,
              "end": 747
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 727,
            "end": 748
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "removeAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 753,
              "end": 762
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "items",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 771,
                        "end": 772
                      },
                      "typeArguments": null,
                      "start": 771,
                      "end": 772
                    },
                    "start": 771,
                    "end": 774
                  },
                  "start": 769,
                  "end": 774
                },
                "start": 763,
                "end": 774
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 777,
                    "end": 778
                  },
                  "typeArguments": null,
                  "start": 777,
                  "end": 778
                },
                "start": 777,
                "end": 780
              },
              "start": 775,
              "end": 780
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 753,
            "end": 781
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "destroy",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 793
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 800,
                      "end": 801
                    },
                    "typeArguments": null,
                    "start": 800,
                    "end": 801
                  },
                  "start": 798,
                  "end": 801
                },
                "start": 794,
                "end": 801
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 804,
                "end": 808
              },
              "start": 802,
              "end": 808
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 786,
            "end": 809
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "destroyAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 824
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "items",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 833,
                        "end": 834
                      },
                      "typeArguments": null,
                      "start": 833,
                      "end": 834
                    },
                    "start": 833,
                    "end": 836
                  },
                  "start": 831,
                  "end": 836
                },
                "start": 825,
                "end": 836
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 839,
                "end": 843
              },
              "start": 837,
              "end": 843
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 814,
            "end": 844
          }
        ],
        "start": 330,
        "end": 846
      },
      "declare": false,
      "start": 261,
      "end": 846
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutObservableArrayStatic",
        "optional": false,
        "typeAnnotation": null,
        "start": 858,
        "end": 887
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 894,
              "end": 896
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 898,
                  "end": 921
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 922,
                      "end": 925
                    }
                  ],
                  "start": 921,
                  "end": 926
                },
                "start": 898,
                "end": 926
              },
              "start": 896,
              "end": 926
            },
            "accessibility": null,
            "static": false,
            "start": 894,
            "end": 927
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 934,
                    "end": 935
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 934,
                  "end": 935
                }
              ],
              "start": 933,
              "end": 936
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 945,
                        "end": 946
                      },
                      "typeArguments": null,
                      "start": 945,
                      "end": 946
                    },
                    "start": 945,
                    "end": 948
                  },
                  "start": 943,
                  "end": 948
                },
                "start": 937,
                "end": 948
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 974
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 975,
                        "end": 976
                      },
                      "typeArguments": null,
                      "start": 975,
                      "end": 976
                    }
                  ],
                  "start": 974,
                  "end": 977
                },
                "start": 951,
                "end": 977
              },
              "start": 949,
              "end": 977
            },
            "start": 933,
            "end": 978
          }
        ],
        "start": 888,
        "end": 980
      },
      "declare": false,
      "start": 848,
      "end": 980
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ko",
        "optional": false,
        "typeAnnotation": null,
        "start": 1000,
        "end": 1002
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "observableArray",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KnockoutObservableArrayStatic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1037,
                          "end": 1066
                        },
                        "typeArguments": null,
                        "start": 1037,
                        "end": 1066
                      },
                      "start": 1035,
                      "end": 1066
                    },
                    "start": 1020,
                    "end": 1066
                  },
                  "init": null,
                  "definite": false,
                  "start": 1020,
                  "end": 1066
                }
              ],
              "declare": false,
              "start": 1016,
              "end": 1067
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1009,
            "end": 1067
          }
        ],
        "start": 1003,
        "end": 1069
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 982,
      "end": 1069
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Portal",
            "optional": false,
            "typeAnnotation": null,
            "start": 1081,
            "end": 1087
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Controls",
            "optional": false,
            "typeAnnotation": null,
            "start": 1088,
            "end": 1096
          },
          "start": 1081,
          "end": 1096
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Validators",
          "optional": false,
          "typeAnnotation": null,
          "start": 1097,
          "end": 1107
        },
        "start": 1081,
        "end": 1107
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 1128,
                "end": 1137
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1138,
                      "end": 1144
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1138,
                    "end": 1144
                  }
                ],
                "start": 1137,
                "end": 1145
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_subscription",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1164,
                      "end": 1177
                    },
                    "typeAnnotation": null,
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1156,
                    "end": 1178
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1194,
                      "end": 1201
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KnockoutObservable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1203,
                          "end": 1221
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1222,
                              "end": 1228
                            }
                          ],
                          "start": 1221,
                          "end": 1229
                        },
                        "start": 1203,
                        "end": 1229
                      },
                      "start": 1201,
                      "end": 1229
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1187,
                    "end": 1230
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "validationState",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1246,
                      "end": 1261
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KnockoutObservable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1263,
                          "end": 1281
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1282,
                              "end": 1288
                            }
                          ],
                          "start": 1281,
                          "end": 1289
                        },
                        "start": 1263,
                        "end": 1289
                      },
                      "start": 1261,
                      "end": 1289
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1239,
                    "end": 1290
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "validate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1306,
                      "end": 1314
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KnockoutObservable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1316,
                          "end": 1334
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1335,
                                "end": 1341
                              },
                              "typeArguments": null,
                              "start": 1335,
                              "end": 1341
                            }
                          ],
                          "start": 1334,
                          "end": 1342
                        },
                        "start": 1316,
                        "end": 1342
                      },
                      "start": 1314,
                      "end": 1342
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1299,
                    "end": 1343
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1352,
                      "end": 1363
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1374,
                              "end": 1380
                            },
                            "start": 1372,
                            "end": 1380
                          },
                          "start": 1364,
                          "end": 1380
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1382,
                        "end": 1385
                      },
                      "expression": false,
                      "start": 1363,
                      "end": 1385
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1352,
                    "end": 1385
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "destroy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1401,
                      "end": 1408
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1412,
                          "end": 1416
                        },
                        "start": 1410,
                        "end": 1416
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1417,
                        "end": 1420
                      },
                      "expression": false,
                      "start": 1408,
                      "end": 1420
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1394,
                    "end": 1420
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_validate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1436,
                      "end": 1445
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1453,
                                "end": 1459
                              },
                              "typeArguments": null,
                              "start": 1453,
                              "end": 1459
                            },
                            "start": 1451,
                            "end": 1459
                          },
                          "start": 1446,
                          "end": 1459
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1462,
                          "end": 1468
                        },
                        "start": 1460,
                        "end": 1468
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1477,
                              "end": 1478
                            },
                            "start": 1470,
                            "end": 1478
                          }
                        ],
                        "start": 1469,
                        "end": 1480
                      },
                      "expression": false,
                      "start": 1445,
                      "end": 1480
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1429,
                    "end": 1480
                  }
                ],
                "start": 1146,
                "end": 1486
              },
              "abstract": false,
              "declare": false,
              "start": 1122,
              "end": 1486
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1115,
            "end": 1486
          }
        ],
        "start": 1108,
        "end": 1488
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1071,
      "end": 1488
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "PortalFx",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1508
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ViewModels",
              "optional": false,
              "typeAnnotation": null,
              "start": 1509,
              "end": 1519
            },
            "start": 1500,
            "end": 1519
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Controls",
            "optional": false,
            "typeAnnotation": null,
            "start": 1520,
            "end": 1528
          },
          "start": 1500,
          "end": 1528
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Validators",
          "optional": false,
          "typeAnnotation": null,
          "start": 1529,
          "end": 1539
        },
        "start": 1500,
        "end": 1539
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 1560,
                "end": 1569
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1570,
                      "end": 1576
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1570,
                    "end": 1576
                  }
                ],
                "start": 1569,
                "end": 1577
              },
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Portal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1586,
                      "end": 1592
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Controls",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1593,
                      "end": 1601
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1586,
                    "end": 1601
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Validators",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1602,
                    "end": 1612
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1586,
                  "end": 1612
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Validator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1613,
                  "end": 1622
                },
                "optional": false,
                "computed": false,
                "start": 1586,
                "end": 1622
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1623,
                      "end": 1629
                    },
                    "typeArguments": null,
                    "start": 1623,
                    "end": 1629
                  }
                ],
                "start": 1622,
                "end": 1630
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1642,
                      "end": 1653
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1664,
                              "end": 1670
                            },
                            "start": 1662,
                            "end": 1670
                          },
                          "start": 1654,
                          "end": 1670
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 1686,
                                "end": 1691
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1692,
                                  "end": 1699
                                }
                              ],
                              "optional": false,
                              "start": 1686,
                              "end": 1700
                            },
                            "directive": null,
                            "start": 1686,
                            "end": 1701
                          }
                        ],
                        "start": 1672,
                        "end": 1711
                      },
                      "expression": false,
                      "start": 1653,
                      "end": 1711
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1642,
                    "end": 1711
                  }
                ],
                "start": 1631,
                "end": 1717
              },
              "abstract": false,
              "declare": false,
              "start": 1554,
              "end": 1717
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1547,
            "end": 1717
          }
        ],
        "start": 1540,
        "end": 1720
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1490,
      "end": 1720
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Contract",
        "optional": false,
        "typeAnnotation": null,
        "start": 1732,
        "end": 1740
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1741,
              "end": 1747
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1741,
            "end": 1747
          }
        ],
        "start": 1740,
        "end": 1748
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "validators",
              "optional": false,
              "typeAnnotation": null,
              "start": 1756,
              "end": 1766
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1768,
                  "end": 1791
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PortalFx",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1792,
                                "end": 1800
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ViewModels",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1801,
                                "end": 1811
                              },
                              "start": 1792,
                              "end": 1811
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Controls",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1812,
                              "end": 1820
                            },
                            "start": 1792,
                            "end": 1820
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Validators",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1821,
                            "end": 1831
                          },
                          "start": 1792,
                          "end": 1831
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Validator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1832,
                          "end": 1841
                        },
                        "start": 1792,
                        "end": 1841
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1842,
                              "end": 1848
                            },
                            "typeArguments": null,
                            "start": 1842,
                            "end": 1848
                          }
                        ],
                        "start": 1841,
                        "end": 1849
                      },
                      "start": 1792,
                      "end": 1849
                    }
                  ],
                  "start": 1791,
                  "end": 1850
                },
                "start": 1768,
                "end": 1850
              },
              "start": 1766,
              "end": 1850
            },
            "accessibility": null,
            "static": false,
            "start": 1756,
            "end": 1851
          }
        ],
        "start": 1749,
        "end": 1853
      },
      "declare": false,
      "start": 1722,
      "end": 1853
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 1862,
        "end": 1871
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1872,
              "end": 1878
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1872,
            "end": 1878
          }
        ],
        "start": 1871,
        "end": 1879
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Contract",
            "optional": false,
            "typeAnnotation": null,
            "start": 1891,
            "end": 1899
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1900,
                  "end": 1906
                },
                "typeArguments": null,
                "start": 1900,
                "end": 1906
              }
            ],
            "start": 1899,
            "end": 1907
          },
          "start": 1891,
          "end": 1907
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "validators",
              "optional": false,
              "typeAnnotation": null,
              "start": 1922,
              "end": 1932
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1934,
                  "end": 1957
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PortalFx",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1958,
                                "end": 1966
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ViewModels",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1967,
                                "end": 1977
                              },
                              "start": 1958,
                              "end": 1977
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Controls",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1978,
                              "end": 1986
                            },
                            "start": 1958,
                            "end": 1986
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Validators",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1987,
                            "end": 1997
                          },
                          "start": 1958,
                          "end": 1997
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Validator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1998,
                          "end": 2007
                        },
                        "start": 1958,
                        "end": 2007
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2008,
                              "end": 2014
                            },
                            "typeArguments": null,
                            "start": 2008,
                            "end": 2014
                          }
                        ],
                        "start": 2007,
                        "end": 2015
                      },
                      "start": 1958,
                      "end": 2015
                    }
                  ],
                  "start": 1957,
                  "end": 2016
                },
                "start": 1934,
                "end": 2016
              },
              "start": 1932,
              "end": 2016
            },
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ko",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2019,
                  "end": 2021
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "observableArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2022,
                  "end": 2037
                },
                "optional": false,
                "computed": false,
                "start": 2019,
                "end": 2037
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PortalFx",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2038,
                              "end": 2046
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ViewModels",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2047,
                              "end": 2057
                            },
                            "start": 2038,
                            "end": 2057
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Controls",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2058,
                            "end": 2066
                          },
                          "start": 2038,
                          "end": 2066
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Validators",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2067,
                          "end": 2077
                        },
                        "start": 2038,
                        "end": 2077
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Validator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2078,
                        "end": 2087
                      },
                      "start": 2038,
                      "end": 2087
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2088,
                            "end": 2094
                          },
                          "typeArguments": null,
                          "start": 2088,
                          "end": 2094
                        }
                      ],
                      "start": 2087,
                      "end": 2095
                    },
                    "start": 2038,
                    "end": 2095
                  }
                ],
                "start": 2037,
                "end": 2096
              },
              "arguments": [],
              "optional": false,
              "start": 2019,
              "end": 2098
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1915,
            "end": 2099
          }
        ],
        "start": 1908,
        "end": 2101
      },
      "abstract": false,
      "declare": false,
      "start": 1856,
      "end": 2101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2102
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableBase",
    "start": 10,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "peek",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 89,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservable",
    "start": 99,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 121,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableBase",
    "start": 129,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "equalityComparer",
    "start": 161,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 191,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "valueHasMutated",
    "start": 204,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "valueWillMutate",
    "start": 233,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 261,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableArray",
    "start": 271,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 298,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservable",
    "start": 306,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 336,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "searchElement",
    "start": 344,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "fromIndex",
    "start": 362,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 395,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 416,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "splice",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 447,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 454,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "deleteCount",
    "start": 462,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 476,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 487,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "pop",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 528,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 531,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "shift",
    "start": 554,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "unshift",
    "start": 570,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 578,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 581,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 594,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "reverse",
    "start": 606,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "sort",
    "start": 626,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "compareFunction",
    "start": 631,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 662,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 665,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 684,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "oldItem",
    "start": 692,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "newItem",
    "start": 704,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 717,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "remove",
    "start": 727,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "removeAll",
    "start": 753,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 763,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "destroy",
    "start": 786,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 794,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 804,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "destroyAll",
    "start": 814,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 825,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 839,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 848,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableArrayStatic",
    "start": 858,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 894,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableArray",
    "start": 898,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 922,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 937,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableArray",
    "start": 951,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 982,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 990,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "ko",
    "start": 1000,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "observableArray",
    "start": 1020,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableArrayStatic",
    "start": 1037,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1071,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "Portal",
    "start": 1081,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "Controls",
    "start": 1088,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "Validators",
    "start": 1097,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1115,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1122,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 1128,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1138,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1156,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "_subscription",
    "start": 1164,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1187,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1194,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservable",
    "start": 1203,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1222,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1239,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "validationState",
    "start": 1246,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservable",
    "start": 1263,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1299,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 1306,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservable",
    "start": 1316,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1335,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1352,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1364,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1374,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1394,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "destroy",
    "start": 1401,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1412,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1429,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "_validate",
    "start": 1436,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1446,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1453,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1462,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1470,
    "end": 1476
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1490,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "PortalFx",
    "start": 1500,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "ViewModels",
    "start": 1509,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "Controls",
    "start": 1520,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "Validators",
    "start": 1529,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1547,
    "end": 1553
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1554,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 1560,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1570,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1578,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "Portal",
    "start": 1586,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "Controls",
    "start": 1593,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "Validators",
    "start": 1602,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 1613,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1623,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1642,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1654,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1664,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1686,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1692,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1722,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "Contract",
    "start": 1732,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1741,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "validators",
    "start": 1756,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableArray",
    "start": 1768,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "PortalFx",
    "start": 1792,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "ViewModels",
    "start": 1801,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "Controls",
    "start": 1812,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "Validators",
    "start": 1821,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 1832,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1842,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1856,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "ViewModel",
    "start": 1862,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1872,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1880,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "Contract",
    "start": 1891,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1900,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1915,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "validators",
    "start": 1922,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableArray",
    "start": 1934,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "PortalFx",
    "start": 1958,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "ViewModels",
    "start": 1967,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "Controls",
    "start": 1978,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "Validators",
    "start": 1987,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 1998,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 2008,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "ko",
    "start": 2019,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "observableArray",
    "start": 2022,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "PortalFx",
    "start": 2038,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "ViewModels",
    "start": 2047,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "Controls",
    "start": 2058,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "Validators",
    "start": 2067,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 2078,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 2088,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2100,
    "end": 2101
  }
]
```
