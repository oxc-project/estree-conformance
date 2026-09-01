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
        "name": "Effect",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 17,
            "end": 22
          }
        ],
        "start": 16,
        "end": 23
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 42
                },
                "typeArguments": null,
                "start": 41,
                "end": 42
              },
              "start": 39,
              "end": 42
            },
            "accessibility": null,
            "static": false,
            "start": 28,
            "end": 43
          }
        ],
        "start": 24,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Eff",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 71
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 86
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 87,
                    "end": 90
                  }
                ],
                "start": 86,
                "end": 91
              },
              "start": 80,
              "end": 91
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 68,
            "end": 91
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 97
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 93,
            "end": 97
          }
        ],
        "start": 67,
        "end": 98
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 120
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Eff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 124
                        },
                        "typeArguments": null,
                        "start": 121,
                        "end": 124
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 130
                        },
                        "typeArguments": null,
                        "start": 126,
                        "end": 130
                      }
                    ],
                    "start": 120,
                    "end": 131
                  },
                  "start": 111,
                  "end": 131
                },
                "start": 108,
                "end": 131
              },
              "start": 105,
              "end": 131
            },
            "start": 103,
            "end": 131
          },
          "start": 102,
          "end": 131
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Effect",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 141
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AEff",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 146
                },
                "typeArguments": null,
                "start": 142,
                "end": 146
              }
            ],
            "start": 141,
            "end": 147
          },
          "start": 135,
          "end": 147
        },
        "start": 133,
        "end": 147
      },
      "body": null,
      "expression": false,
      "start": 47,
      "end": 148
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rpc",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 163
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 177
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 186,
              "end": 192
            },
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 167,
            "end": 192
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Payload",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 207
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 210,
              "end": 217
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 196,
            "end": 217
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Success",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 232
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 235,
              "end": 242
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 221,
            "end": 242
          }
        ],
        "start": 163,
        "end": 244
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 264,
                  "end": 267
                },
                "typeArguments": null,
                "start": 264,
                "end": 267
              },
              "start": 262,
              "end": 267
            },
            "accessibility": null,
            "static": false,
            "start": 249,
            "end": 268
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "payloadSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 293
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 302
                },
                "typeArguments": null,
                "start": 295,
                "end": 302
              },
              "start": 293,
              "end": 302
            },
            "accessibility": null,
            "static": false,
            "start": 271,
            "end": 303
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "successSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 328
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Success",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 337
                },
                "typeArguments": null,
                "start": 330,
                "end": 337
              },
              "start": 328,
              "end": 337
            },
            "accessibility": null,
            "static": false,
            "start": 306,
            "end": 338
          }
        ],
        "start": 245,
        "end": 340
      },
      "declare": false,
      "start": 150,
      "end": 340
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RpcAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 352,
        "end": 358
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 378,
                "end": 384
              },
              "start": 376,
              "end": 384
            },
            "accessibility": null,
            "static": false,
            "start": 363,
            "end": 385
          }
        ],
        "start": 359,
        "end": 387
      },
      "declare": false,
      "start": 342,
      "end": 387
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Payload",
        "optional": false,
        "typeAnnotation": null,
        "start": 394,
        "end": 401
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 402,
            "end": 403
          }
        ],
        "start": 401,
        "end": 404
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 408
          },
          "typeArguments": null,
          "start": 407,
          "end": 408
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rpc",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 420
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 431
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 427,
                  "end": 431
                },
                "start": 421,
                "end": 431
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 447
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 439,
                  "end": 447
                },
                "start": 433,
                "end": 447
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Success",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 463
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 455,
                  "end": 463
                },
                "start": 449,
                "end": 463
              }
            ],
            "start": 420,
            "end": 464
          },
          "start": 417,
          "end": 464
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Payload",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 477
          },
          "typeArguments": null,
          "start": 469,
          "end": 477
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 482,
          "end": 487
        },
        "start": 407,
        "end": 487
      },
      "declare": false,
      "start": 389,
      "end": 488
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResultFrom",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 505
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 507
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RpcAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 522
              },
              "typeArguments": null,
              "start": 516,
              "end": 522
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 506,
            "end": 522
          }
        ],
        "start": 505,
        "end": 523
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 527
          },
          "typeArguments": null,
          "start": 526,
          "end": 527
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rpc",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 539
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 553
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 549,
                  "end": 553
                },
                "start": 543,
                "end": 553
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 563,
                    "end": 571
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 563,
                  "end": 571
                },
                "start": 557,
                "end": 571
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Success",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 589
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 581,
                  "end": 589
                },
                "start": 575,
                "end": 589
              }
            ],
            "start": 539,
            "end": 591
          },
          "start": 536,
          "end": 591
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Success",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 604
          },
          "typeArguments": null,
          "start": 596,
          "end": 604
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 609,
          "end": 614
        },
        "start": 526,
        "end": 614
      },
      "declare": false,
      "start": 490,
      "end": 615
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToHandlerFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 633
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Current",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 641
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RpcAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 650,
                "end": 656
              },
              "typeArguments": null,
              "start": 650,
              "end": 656
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 634,
            "end": 656
          }
        ],
        "start": 633,
        "end": 657
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "payload",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 680
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Current",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 681,
                        "end": 688
                      },
                      "typeArguments": null,
                      "start": 681,
                      "end": 688
                    }
                  ],
                  "start": 680,
                  "end": 689
                },
                "start": 673,
                "end": 689
              },
              "start": 671,
              "end": 689
            },
            "start": 664,
            "end": 689
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ResultFrom",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 705
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Current",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 706,
                    "end": 713
                  },
                  "typeArguments": null,
                  "start": 706,
                  "end": 713
                }
              ],
              "start": 705,
              "end": 714
            },
            "start": 695,
            "end": 714
          },
          "start": 692,
          "end": 714
        },
        "start": 660,
        "end": 714
      },
      "declare": false,
      "start": 617,
      "end": 715
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HandlersFrom",
        "optional": false,
        "typeAnnotation": null,
        "start": 722,
        "end": 734
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rpc",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 738
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RpcAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 753
              },
              "typeArguments": null,
              "start": 747,
              "end": 753
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 735,
            "end": 753
          }
        ],
        "start": 734,
        "end": 754
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Current",
          "optional": false,
          "typeAnnotation": null,
          "start": 771,
          "end": 778
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rpc",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 785
          },
          "typeArguments": null,
          "start": 782,
          "end": 785
        },
        "nameType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Current",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 796
            },
            "typeArguments": null,
            "start": 789,
            "end": 796
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "_tag",
              "raw": "\"_tag\"",
              "start": 797,
              "end": 803
            },
            "start": 797,
            "end": 803
          },
          "start": 789,
          "end": 804
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ToHandlerFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 807,
            "end": 818
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Current",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 819,
                  "end": 826
                },
                "typeArguments": null,
                "start": 819,
                "end": 826
              }
            ],
            "start": 818,
            "end": 827
          },
          "start": 807,
          "end": 827
        },
        "optional": false,
        "readonly": true,
        "start": 757,
        "end": 830
      },
      "declare": false,
      "start": 717,
      "end": 831
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RpcGroup",
        "optional": false,
        "typeAnnotation": null,
        "start": 843,
        "end": 851
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 860
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RpcAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 869,
                "end": 875
              },
              "typeArguments": null,
              "start": 869,
              "end": 875
            },
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 852,
            "end": 875
          }
        ],
        "start": 851,
        "end": 876
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
              "name": "toLayer",
              "optional": false,
              "typeAnnotation": null,
              "start": 881,
              "end": 888
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Handlers",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 889,
                    "end": 897
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HandlersFrom",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 906,
                      "end": 918
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 919,
                            "end": 920
                          },
                          "typeArguments": null,
                          "start": 919,
                          "end": 920
                        }
                      ],
                      "start": 918,
                      "end": 921
                    },
                    "start": 906,
                    "end": 921
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 889,
                  "end": 921
                }
              ],
              "start": 888,
              "end": 922
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "build",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Effect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 930,
                      "end": 936
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Handlers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 937,
                            "end": 945
                          },
                          "typeArguments": null,
                          "start": 937,
                          "end": 945
                        }
                      ],
                      "start": 936,
                      "end": 946
                    },
                    "start": 930,
                    "end": 946
                  },
                  "start": 928,
                  "end": 946
                },
                "start": 923,
                "end": 946
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 949,
                "end": 956
              },
              "start": 947,
              "end": 956
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 881,
            "end": 957
          }
        ],
        "start": 877,
        "end": 959
      },
      "declare": false,
      "start": 833,
      "end": 959
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rpcs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RpcGroup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 981,
                  "end": 989
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Rpc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 993
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "Register",
                              "raw": "\"Register\"",
                              "start": 994,
                              "end": 1004
                            },
                            "start": 994,
                            "end": 1004
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 1006,
                            "end": 1012
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1014,
                            "end": 1020
                          }
                        ],
                        "start": 993,
                        "end": 1021
                      },
                      "start": 990,
                      "end": 1021
                    }
                  ],
                  "start": 989,
                  "end": 1022
                },
                "start": 981,
                "end": 1022
              },
              "start": 979,
              "end": 1022
            },
            "start": 975,
            "end": 1022
          },
          "init": null,
          "definite": false,
          "start": 975,
          "end": 1022
        }
      ],
      "declare": true,
      "start": 961,
      "end": 1023
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "layerServerHandlers",
              "optional": false,
              "typeAnnotation": null,
              "start": 1038,
              "end": 1057
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rpcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1060,
                  "end": 1064
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLayer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1065,
                  "end": 1072
                },
                "optional": false,
                "computed": false,
                "start": 1060,
                "end": 1072
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "gen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1076,
                    "end": 1079
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": true,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Register",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1114,
                                    "end": 1122
                                  },
                                  "value": {
                                    "type": "ArrowFunctionExpression",
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "id",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1125,
                                        "end": 1127
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "String",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1132,
                                        "end": 1138
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "id",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1139,
                                          "end": 1141
                                        }
                                      ],
                                      "optional": false,
                                      "start": 1132,
                                      "end": 1142
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1124,
                                    "end": 1142
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1114,
                                  "end": 1142
                                }
                              ],
                              "start": 1106,
                              "end": 1149
                            },
                            "start": 1099,
                            "end": 1150
                          }
                        ],
                        "start": 1093,
                        "end": 1154
                      },
                      "expression": false,
                      "start": 1080,
                      "end": 1154
                    }
                  ],
                  "optional": false,
                  "start": 1076,
                  "end": 1155
                }
              ],
              "optional": false,
              "start": 1060,
              "end": 1157
            },
            "definite": false,
            "start": 1038,
            "end": 1157
          }
        ],
        "declare": false,
        "start": 1032,
        "end": 1158
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1025,
      "end": 1158
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1158
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
    "value": "Effect",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 17,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 28,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 47,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 68,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 108,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 111,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 150,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 160,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 167,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 174,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 178,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 196,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 210,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 221,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Success",
    "start": 225,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 249,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 271,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "payloadSchema",
    "start": 280,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 295,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 306,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "successSchema",
    "start": 315,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "Success",
    "start": 330,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 342,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "RpcAny",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 363,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 389,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 394,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 409,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 421,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "_Tag",
    "start": 427,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 433,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "_Payload",
    "start": 439,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 449,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "_Success",
    "start": 455,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "_Payload",
    "start": 469,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 490,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "ResultFrom",
    "start": 495,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 508,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "RpcAny",
    "start": 516,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 528,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 536,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 543,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "_Tag",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 557,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "_Payload",
    "start": 563,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 575,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "_Success",
    "start": 581,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "_Success",
    "start": 596,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 609,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 617,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "ToHandlerFn",
    "start": 622,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 634,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 642,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "RpcAny",
    "start": 650,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 664,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 673,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 681,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 692,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "ResultFrom",
    "start": 695,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 706,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 717,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "HandlersFrom",
    "start": 722,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 735,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 739,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "RpcAny",
    "start": 747,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 761,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 771,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 779,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 782,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 786,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 789,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 796,
    "end": 797
  },
  {
    "type": "String",
    "value": "\"_tag\"",
    "start": 797,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "ToHandlerFn",
    "start": 807,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 819,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 833,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "RpcGroup",
    "start": 843,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 852,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 855,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 861,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "RpcAny",
    "start": 869,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "toLayer",
    "start": 881,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "Handlers",
    "start": 889,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 898,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "HandlersFrom",
    "start": 906,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "build",
    "start": 923,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 930,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "Handlers",
    "start": 937,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 949,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 961,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 969,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "Rpcs",
    "start": 975,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "RpcGroup",
    "start": 981,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 990,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 993,
    "end": 994
  },
  {
    "type": "String",
    "value": "\"Register\"",
    "start": 994,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1006,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1014,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1025,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1032,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "layerServerHandlers",
    "start": 1038,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "Rpcs",
    "start": 1060,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "toLayer",
    "start": 1065,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 1076,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1080,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1099,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "Register",
    "start": 1114,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1125,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1129,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1132,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1139,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158
  }
]
```
