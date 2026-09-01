__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropDeco",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 17
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 32
              },
              "typeArguments": null,
              "start": 26,
              "end": 32
            },
            "start": 24,
            "end": 32
          },
          "start": 18,
          "end": 32
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "propKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 43,
                  "end": 49
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 52,
                  "end": 58
                }
              ],
              "start": 43,
              "end": 58
            },
            "start": 41,
            "end": 58
          },
          "start": 34,
          "end": 58
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 60,
        "end": 63
      },
      "expression": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 72
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 73,
        "end": 76
      },
      "abstract": false,
      "declare": false,
      "start": 65,
      "end": 76
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 85
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 101
                },
                "start": 92,
                "end": 101
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 109,
                      "end": 114
                    },
                    "start": 109,
                    "end": 114
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 117,
                    "end": 121
                  }
                ],
                "start": 109,
                "end": 121
              },
              "start": 107,
              "end": 121
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 92,
            "end": 122
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 137
                },
                "start": 128,
                "end": 137
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 143
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 145,
                      "end": 149
                    },
                    "start": 145,
                    "end": 149
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 152,
                    "end": 157
                  }
                ],
                "start": 145,
                "end": 157
              },
              "start": 143,
              "end": 157
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 128,
            "end": 158
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 173
                },
                "start": 164,
                "end": 173
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 181,
                      "end": 186
                    },
                    "start": 181,
                    "end": 186
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 189,
                    "end": 198
                  }
                ],
                "start": 181,
                "end": 198
              },
              "start": 179,
              "end": 198
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 164,
            "end": 199
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 214
                },
                "start": 205,
                "end": 214
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 222,
                "end": 226
              },
              "start": 220,
              "end": 226
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 205,
            "end": 227
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 242
                },
                "start": 233,
                "end": 242
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 250,
                "end": 255
              },
              "start": 248,
              "end": 255
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 233,
            "end": 256
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 271
                },
                "start": 262,
                "end": 271
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 277
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 279,
                "end": 288
              },
              "start": 277,
              "end": 288
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 262,
            "end": 289
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 304
                },
                "start": 295,
                "end": 304
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 310
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 312,
                    "end": 321
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 324,
                    "end": 328
                  }
                ],
                "start": 312,
                "end": 328
              },
              "start": 310,
              "end": 328
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 295,
            "end": 329
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 344
                },
                "start": 335,
                "end": 344
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 352,
                    "end": 358
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 361,
                    "end": 365
                  }
                ],
                "start": 352,
                "end": 365
              },
              "start": 350,
              "end": 365
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 335,
            "end": 366
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 381
                },
                "start": 372,
                "end": 381
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 387
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 389,
                    "end": 395
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 399
                    },
                    "typeArguments": null,
                    "start": 398,
                    "end": 399
                  }
                ],
                "start": 389,
                "end": 399
              },
              "start": 387,
              "end": 399
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 372,
            "end": 400
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 415
                },
                "start": 406,
                "end": 415
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 423,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 423,
                    "end": 424
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 427,
                    "end": 431
                  }
                ],
                "start": 423,
                "end": 431
              },
              "start": 421,
              "end": 431
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 406,
            "end": 432
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 447
                },
                "start": 438,
                "end": 447
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 455,
                    "end": 459
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 463
                    },
                    "typeArguments": null,
                    "start": 462,
                    "end": 463
                  }
                ],
                "start": 455,
                "end": 463
              },
              "start": 453,
              "end": 463
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 438,
            "end": 464
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 479
                },
                "start": 470,
                "end": 479
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 485
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 487,
                    "end": 491
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 494,
                    "end": 500
                  }
                ],
                "start": 487,
                "end": 500
              },
              "start": 485,
              "end": 500
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 470,
            "end": 501
          }
        ],
        "start": 86,
        "end": 503
      },
      "abstract": false,
      "declare": false,
      "start": 78,
      "end": 503
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 503
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 9,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "propKey",
    "start": 34,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 52,
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
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 93,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 115,
    "end": 116
  },
  {
    "type": "Null",
    "value": "null",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 129,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 165,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "String",
    "value": "\"foo\"",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 189,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 206,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Null",
    "value": "null",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 234,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 250,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 263,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 279,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 296,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 312,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 322,
    "end": 323
  },
  {
    "type": "Null",
    "value": "null",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 336,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 359,
    "end": 360
  },
  {
    "type": "Null",
    "value": "null",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 373,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 407,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 425,
    "end": 426
  },
  {
    "type": "Null",
    "value": "null",
    "start": 427,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 439,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Null",
    "value": "null",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 471,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Null",
    "value": "null",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 494,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503
  }
]
```
