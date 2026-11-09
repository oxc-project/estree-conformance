__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 31,
                      "end": 37
                    },
                    "start": 29,
                    "end": 37
                  },
                  "start": 26,
                  "end": 37
                }
              ],
              "typeAnnotation": null,
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 25,
              "end": 39
            }
          ],
          "start": 19,
          "end": 41
        },
        "declare": false,
        "start": 7,
        "end": 41
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 41
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 57
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 79,
                      "end": 85
                    },
                    "start": 77,
                    "end": 85
                  },
                  "start": 74,
                  "end": 85
                }
              ],
              "typeAnnotation": null,
              "readonly": true,
              "static": false,
              "accessibility": null,
              "start": 64,
              "end": 87
            }
          ],
          "start": 58,
          "end": 89
        },
        "abstract": false,
        "declare": false,
        "start": 50,
        "end": 89
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 43,
      "end": 89
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 119,
                      "end": 125
                    },
                    "start": 117,
                    "end": 125
                  },
                  "start": 114,
                  "end": 125
                }
              ],
              "typeAnnotation": null,
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 113,
              "end": 126
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "property",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 139
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 141,
                  "end": 147
                },
                "start": 139,
                "end": 147
              },
              "accessibility": null,
              "static": false,
              "start": 131,
              "end": 148
            }
          ],
          "start": 107,
          "end": 150
        },
        "declare": false,
        "start": 98,
        "end": 151
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 91,
      "end": 151
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NumberIndex",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 181
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 190,
                      "end": 196
                    },
                    "start": 188,
                    "end": 196
                  },
                  "start": 185,
                  "end": 196
                }
              ],
              "typeAnnotation": null,
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 184,
              "end": 198
            }
          ],
          "start": 182,
          "end": 200
        },
        "declare": false,
        "start": 160,
        "end": 200
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 153,
      "end": 200
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SymbolIndex",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 229
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 238,
                      "end": 244
                    },
                    "start": 236,
                    "end": 244
                  },
                  "start": 233,
                  "end": 244
                }
              ],
              "typeAnnotation": null,
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 232,
              "end": 246
            }
          ],
          "start": 230,
          "end": 248
        },
        "declare": false,
        "start": 208,
        "end": 248
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 201,
      "end": 248
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TemplateIndex",
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 279
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "prefix-",
                            "cooked": "prefix-"
                          },
                          "tail": false,
                          "start": 288,
                          "end": 298
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 304,
                          "end": 306
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 298,
                          "end": 304
                        }
                      ],
                      "start": 288,
                      "end": 306
                    },
                    "start": 286,
                    "end": 306
                  },
                  "start": 283,
                  "end": 306
                }
              ],
              "typeAnnotation": null,
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 282,
              "end": 308
            }
          ],
          "start": 280,
          "end": 310
        },
        "declare": false,
        "start": 256,
        "end": 310
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 249,
      "end": 310
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExplicitAny",
          "optional": false,
          "typeAnnotation": null,
          "start": 328,
          "end": 339
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 348,
                      "end": 354
                    },
                    "start": 346,
                    "end": 354
                  },
                  "start": 343,
                  "end": 354
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 357,
                  "end": 360
                },
                "start": 355,
                "end": 360
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 342,
              "end": 361
            }
          ],
          "start": 340,
          "end": 363
        },
        "declare": false,
        "start": 318,
        "end": 363
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 311,
      "end": 363
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExplicitUnknown",
          "optional": false,
          "typeAnnotation": null,
          "start": 381,
          "end": 396
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 405,
                      "end": 411
                    },
                    "start": 403,
                    "end": 411
                  },
                  "start": 400,
                  "end": 411
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 414,
                  "end": 421
                },
                "start": 412,
                "end": 421
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 399,
              "end": 422
            }
          ],
          "start": 397,
          "end": 424
        },
        "declare": false,
        "start": 371,
        "end": 424
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 364,
      "end": 424
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
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 448
                },
                "typeArguments": null,
                "start": 447,
                "end": 448
              },
              "start": 445,
              "end": 448
            },
            "start": 440,
            "end": 448
          },
          "init": null,
          "definite": false,
          "start": 440,
          "end": 448
        }
      ],
      "declare": true,
      "start": 426,
      "end": 449
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
              "name": "asNumber",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 473,
                  "end": 479
                },
                "start": 471,
                "end": 479
              },
              "start": 463,
              "end": 479
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 487
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "anyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 494
              },
              "optional": false,
              "computed": false,
              "start": 482,
              "end": 494
            },
            "definite": false,
            "start": 463,
            "end": 494
          }
        ],
        "declare": false,
        "start": 457,
        "end": 495
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 450,
      "end": 495
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
              "name": "asString",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 519,
                  "end": 525
                },
                "start": 517,
                "end": 525
              },
              "start": 509,
              "end": 525
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 533
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "anyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 540
              },
              "optional": false,
              "computed": false,
              "start": 528,
              "end": 540
            },
            "definite": false,
            "start": 509,
            "end": 540
          }
        ],
        "declare": false,
        "start": 503,
        "end": 541
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 496,
      "end": 541
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
              "name": "indexedValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 567
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 575
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "anyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 582
              },
              "optional": false,
              "computed": false,
              "start": 570,
              "end": 582
            },
            "definite": false,
            "start": 555,
            "end": 582
          }
        ],
        "declare": false,
        "start": 549,
        "end": 583
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 542,
      "end": 583
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
            "name": "instance",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 610
                },
                "typeArguments": null,
                "start": 609,
                "end": 610
              },
              "start": 607,
              "end": 610
            },
            "start": 599,
            "end": 610
          },
          "init": null,
          "definite": false,
          "start": 599,
          "end": 610
        }
      ],
      "declare": true,
      "start": 585,
      "end": 611
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
            "name": "numbers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumberIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 646
                },
                "typeArguments": null,
                "start": 635,
                "end": 646
              },
              "start": 633,
              "end": 646
            },
            "start": 626,
            "end": 646
          },
          "init": null,
          "definite": false,
          "start": 626,
          "end": 646
        }
      ],
      "declare": true,
      "start": 612,
      "end": 647
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
            "name": "symbols",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SymbolIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 682
                },
                "typeArguments": null,
                "start": 671,
                "end": 682
              },
              "start": 669,
              "end": 682
            },
            "start": 662,
            "end": 682
          },
          "init": null,
          "definite": false,
          "start": 662,
          "end": 682
        }
      ],
      "declare": true,
      "start": 648,
      "end": 683
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
            "name": "templates",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TemplateIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 722
                },
                "typeArguments": null,
                "start": 709,
                "end": 722
              },
              "start": 707,
              "end": 722
            },
            "start": 698,
            "end": 722
          },
          "init": null,
          "definite": false,
          "start": 698,
          "end": 722
        }
      ],
      "declare": true,
      "start": 684,
      "end": 723
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
              "name": "classValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 747
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "instance",
                "optional": false,
                "typeAnnotation": null,
                "start": 750,
                "end": 758
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 759,
                "end": 760
              },
              "optional": false,
              "computed": true,
              "start": 750,
              "end": 761
            },
            "definite": false,
            "start": 737,
            "end": 761
          }
        ],
        "declare": false,
        "start": 731,
        "end": 762
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 724,
      "end": 762
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
              "name": "numberValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 776,
              "end": 787
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null,
                "start": 790,
                "end": 797
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 798,
                "end": 799
              },
              "optional": false,
              "computed": true,
              "start": 790,
              "end": 800
            },
            "definite": false,
            "start": 776,
            "end": 800
          }
        ],
        "declare": false,
        "start": 770,
        "end": 801
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 763,
      "end": 801
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
              "name": "symbolValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 826
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "symbols",
                "optional": false,
                "typeAnnotation": null,
                "start": 829,
                "end": 836
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 843
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 844,
                  "end": 852
                },
                "optional": false,
                "computed": false,
                "start": 837,
                "end": 852
              },
              "optional": false,
              "computed": true,
              "start": 829,
              "end": 853
            },
            "definite": false,
            "start": 815,
            "end": 853
          }
        ],
        "declare": false,
        "start": 809,
        "end": 854
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 802,
      "end": 854
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
              "name": "templateValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 868,
              "end": 881
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "templates",
                "optional": false,
                "typeAnnotation": null,
                "start": 884,
                "end": 893
              },
              "property": {
                "type": "Literal",
                "value": "prefix-foo",
                "raw": "\"prefix-foo\"",
                "start": 894,
                "end": 906
              },
              "optional": false,
              "computed": true,
              "start": 884,
              "end": 907
            },
            "definite": false,
            "start": 868,
            "end": 907
          }
        ],
        "declare": false,
        "start": 862,
        "end": 908
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 855,
      "end": 908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "instance",
            "optional": false,
            "typeAnnotation": null,
            "start": 909,
            "end": 917
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 918,
            "end": 919
          },
          "optional": false,
          "computed": true,
          "start": 909,
          "end": 920
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 923,
          "end": 924
        },
        "start": 909,
        "end": 924
      },
      "directive": null,
      "start": 909,
      "end": 925
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionalParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 937,
        "end": 954
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 968,
                    "end": 974
                  },
                  "start": 966,
                  "end": 974
                },
                "start": 962,
                "end": 974
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 961,
            "end": 976
          }
        ],
        "start": 955,
        "end": 978
      },
      "declare": false,
      "start": 927,
      "end": 978
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RestParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 990,
        "end": 1003
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1017
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1019,
                      "end": 1025
                    },
                    "start": 1019,
                    "end": 1027
                  },
                  "start": 1017,
                  "end": 1027
                },
                "value": null,
                "start": 1011,
                "end": 1027
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1010,
            "end": 1029
          }
        ],
        "start": 1004,
        "end": 1031
      },
      "declare": false,
      "start": 980,
      "end": 1031
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultipleParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1043,
        "end": 1061
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1074,
                    "end": 1080
                  },
                  "start": 1072,
                  "end": 1080
                },
                "start": 1069,
                "end": 1080
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1089,
                    "end": 1095
                  },
                  "start": 1087,
                  "end": 1095
                },
                "start": 1082,
                "end": 1095
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1068,
            "end": 1097
          }
        ],
        "start": 1062,
        "end": 1099
      },
      "declare": false,
      "start": 1033,
      "end": 1099
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 1111,
        "end": 1121
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1134,
                    "end": 1141
                  },
                  "start": 1132,
                  "end": 1141
                },
                "start": 1129,
                "end": 1141
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1128,
            "end": 1143
          }
        ],
        "start": 1122,
        "end": 1145
      },
      "declare": false,
      "start": 1101,
      "end": 1145
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ignored",
        "optional": false,
        "typeAnnotation": null,
        "start": 1171,
        "end": 1178
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1187,
                    "end": 1193
                  },
                  "start": 1185,
                  "end": 1193
                },
                "start": 1182,
                "end": 1193
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1181,
            "end": 1195
          }
        ],
        "start": 1179,
        "end": 1197
      },
      "declare": false,
      "start": 1161,
      "end": 1197
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expected",
        "optional": false,
        "typeAnnotation": null,
        "start": 1229,
        "end": 1237
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1246,
                    "end": 1253
                  },
                  "start": 1244,
                  "end": 1253
                },
                "start": 1241,
                "end": 1253
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1240,
            "end": 1255
          }
        ],
        "start": 1238,
        "end": 1257
      },
      "declare": false,
      "start": 1219,
      "end": 1257
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1257
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 43,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 64,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 91,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 98,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 131,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 153,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 160,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "NumberIndex",
    "start": 170,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 201,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 208,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "SymbolIndex",
    "start": 218,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 249,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 256,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "TemplateIndex",
    "start": 266,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Template",
    "value": "`prefix-${",
    "start": 288,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 298,
    "end": 304
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 311,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 318,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "ExplicitAny",
    "start": 328,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 348,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 357,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 364,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 371,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "ExplicitUnknown",
    "start": 381,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 414,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 426,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 434,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 440,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 450,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 457,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "asNumber",
    "start": 463,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "anyKey",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 496,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 503,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "asString",
    "start": 509,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 528,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "anyKey",
    "start": 534,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 542,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 549,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "indexedValue",
    "start": 555,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 570,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "anyKey",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 585,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 593,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 599,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 612,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 620,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 626,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "NumberIndex",
    "start": 635,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 648,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 656,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "symbols",
    "start": 662,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "SymbolIndex",
    "start": 671,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 684,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 692,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "templates",
    "start": 698,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "TemplateIndex",
    "start": 709,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 724,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 731,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "classValue",
    "start": 737,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 750,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 758,
    "end": 759
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 763,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 770,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "numberValue",
    "start": 776,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 790,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 797,
    "end": 798
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 802,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 809,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "symbolValue",
    "start": 815,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "symbols",
    "start": 829,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 837,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 844,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 855,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 862,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "templateValue",
    "start": 868,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "templates",
    "start": 884,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 893,
    "end": 894
  },
  {
    "type": "String",
    "value": "\"prefix-foo\"",
    "start": 894,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 909,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 917,
    "end": 918
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 921,
    "end": 922
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 927,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "OptionalParameter",
    "start": 937,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 962,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 968,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 980,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "RestParameter",
    "start": 990,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1033,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "MultipleParameters",
    "start": 1043,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1069,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1074,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1082,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1089,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1101,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "InvalidKey",
    "start": 1111,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1129,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1134,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1161,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "Ignored",
    "start": 1171,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1182,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1187,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1219,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "Expected",
    "start": 1229,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1246,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  }
]
```
