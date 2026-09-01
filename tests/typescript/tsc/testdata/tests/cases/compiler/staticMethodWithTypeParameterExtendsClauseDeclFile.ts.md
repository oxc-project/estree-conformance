__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 19,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 48
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 49,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 31,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 24,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 107
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
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
                "name": "myPrivateStaticMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 151
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 152,
                        "end": 153
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 174
                        },
                        "typeArguments": null,
                        "start": 162,
                        "end": 174
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 152,
                      "end": 174
                    }
                  ],
                  "start": 151,
                  "end": 175
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 178,
                  "end": 215
                },
                "expression": false,
                "start": 151,
                "end": 215
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 114,
              "end": 215
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 244
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 245,
                        "end": 246
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 255,
                          "end": 267
                        },
                        "typeArguments": null,
                        "start": 255,
                        "end": 267
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 245,
                      "end": 267
                    }
                  ],
                  "start": 244,
                  "end": 268
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 271,
                  "end": 308
                },
                "expression": false,
                "start": 244,
                "end": 308
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 220,
              "end": 308
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod2",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 350
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 351,
                        "end": 352
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 372
                        },
                        "typeArguments": null,
                        "start": 361,
                        "end": 372
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 351,
                      "end": 372
                    }
                  ],
                  "start": 350,
                  "end": 373
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 376,
                  "end": 413
                },
                "expression": false,
                "start": 350,
                "end": 413
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 313,
              "end": 413
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod2",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 442
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 443,
                        "end": 444
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 453,
                          "end": 464
                        },
                        "typeArguments": null,
                        "start": 453,
                        "end": 464
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 443,
                      "end": 464
                    }
                  ],
                  "start": 442,
                  "end": 465
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 468,
                  "end": 505
                },
                "expression": false,
                "start": 442,
                "end": 505
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 418,
              "end": 505
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 524,
                "end": 544
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 545,
                        "end": 546
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 555,
                          "end": 566
                        },
                        "typeArguments": null,
                        "start": 555,
                        "end": 566
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 545,
                      "end": 566
                    }
                  ],
                  "start": 544,
                  "end": 567
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 570,
                  "end": 577
                },
                "expression": false,
                "start": 544,
                "end": 577
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 510,
              "end": 577
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 603
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 604,
                        "end": 605
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 614,
                          "end": 625
                        },
                        "typeArguments": null,
                        "start": 614,
                        "end": 625
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 604,
                      "end": 625
                    }
                  ],
                  "start": 603,
                  "end": 626
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 629,
                  "end": 636
                },
                "expression": false,
                "start": 603,
                "end": 636
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 582,
              "end": 636
            }
          ],
          "start": 108,
          "end": 638
        },
        "abstract": false,
        "declare": false,
        "start": 61,
        "end": 638
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 54,
      "end": 638
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 638
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6,
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
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 24,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 37,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivateTypeParameters",
    "start": 67,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 114,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 122,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod1",
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
    "type": "Keyword",
    "value": "extends",
    "start": 154,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 162,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 220,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod1",
    "start": 228,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 247,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 255,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 313,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 321,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod2",
    "start": 328,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 353,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 361,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 418,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod2",
    "start": 426,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 445,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 453,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 510,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 517,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 524,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 547,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 555,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 582,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 589,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 606,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 614,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 637,
    "end": 638
  }
]
```
