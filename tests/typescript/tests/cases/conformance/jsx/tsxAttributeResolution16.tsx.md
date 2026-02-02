__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Address",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 94
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
              "name": "street",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              },
              "start": 105,
              "end": 113
            },
            "accessibility": null,
            "static": false,
            "start": 99,
            "end": 114
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "country",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 124
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 126,
                "end": 132
              },
              "start": 124,
              "end": 132
            },
            "accessibility": null,
            "static": false,
            "start": 117,
            "end": 133
          }
        ],
        "start": 95,
        "end": 135
      },
      "declare": false,
      "start": 77,
      "end": 135
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CanadianAddress",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 162
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Address",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 178
          },
          "typeArguments": null,
          "start": 171,
          "end": 178
        }
      ],
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
              "name": "postalCode",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 195
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
              },
              "start": 195,
              "end": 203
            },
            "accessibility": null,
            "static": false,
            "start": 185,
            "end": 204
          }
        ],
        "start": 179,
        "end": 206
      },
      "declare": false,
      "start": 137,
      "end": 206
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmericanAddress",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 233
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Address",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 249
          },
          "typeArguments": null,
          "start": 242,
          "end": 249
        }
      ],
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
              "name": "zipCode",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 263
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 265,
                "end": 271
              },
              "start": 263,
              "end": 271
            },
            "accessibility": null,
            "static": false,
            "start": 256,
            "end": 272
          }
        ],
        "start": 250,
        "end": 274
      },
      "declare": false,
      "start": 208,
      "end": 274
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Properties",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 291
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanadianAddress",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 309
            },
            "typeArguments": null,
            "start": 294,
            "end": 309
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AmericanAddress",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 327
            },
            "typeArguments": null,
            "start": 312,
            "end": 327
          }
        ],
        "start": 294,
        "end": 327
      },
      "declare": false,
      "start": 276,
      "end": 328
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddressComp",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 354
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 368
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 378
          },
          "optional": false,
          "computed": false,
          "start": 363,
          "end": 378
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Properties",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 389
              },
              "typeArguments": null,
              "start": 379,
              "end": 389
            },
            {
              "type": "TSVoidKeyword",
              "start": 391,
              "end": 395
            }
          ],
          "start": 378,
          "end": 396
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
                "name": "render",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 414
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
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
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 430,
                        "end": 434
                      },
                      "start": 423,
                      "end": 435
                    }
                  ],
                  "start": 417,
                  "end": 439
                },
                "expression": false,
                "start": 414,
                "end": 439
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 401,
              "end": 439
            }
          ],
          "start": 397,
          "end": 441
        },
        "abstract": false,
        "declare": false,
        "start": 337,
        "end": 441
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 330,
      "end": 441
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 447,
            "end": 448
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "AddressComp",
                "start": 452,
                "end": 463
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "postalCode",
                    "start": 464,
                    "end": 474
                  },
                  "value": {
                    "type": "Literal",
                    "value": "T1B 0L3",
                    "raw": "'T1B 0L3'",
                    "start": 475,
                    "end": 484
                  },
                  "start": 464,
                  "end": 484
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "street",
                    "start": 485,
                    "end": 491
                  },
                  "value": {
                    "type": "Literal",
                    "value": "vancouver",
                    "raw": "\"vancouver\"",
                    "start": 492,
                    "end": 503
                  },
                  "start": 485,
                  "end": 503
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "country",
                    "start": 504,
                    "end": 511
                  },
                  "value": {
                    "type": "Literal",
                    "value": "CA",
                    "raw": "\"CA\"",
                    "start": 512,
                    "end": 516
                  },
                  "start": 504,
                  "end": 516
                }
              ],
              "selfClosing": true,
              "start": 451,
              "end": 519
            },
            "children": [],
            "closingElement": null,
            "start": 451,
            "end": 519
          },
          "definite": false,
          "start": 447,
          "end": 519
        }
      ],
      "declare": false,
      "start": 443,
      "end": 519
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 43,
  "end": 519
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 77,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Address",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "street",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "country",
    "start": 117,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 137,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "CanadianAddress",
    "start": 147,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 163,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Address",
    "start": 171,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "postalCode",
    "start": 185,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 208,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "AmericanAddress",
    "start": 218,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 234,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "Address",
    "start": 242,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "zipCode",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 265,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 276,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 281,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "CanadianAddress",
    "start": 294,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "AmericanAddress",
    "start": 312,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 330,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 337,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "AddressComp",
    "start": 343,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 355,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 363,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 369,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 379,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 391,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 401,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 423,
    "end": 429
  },
  {
    "type": "Null",
    "value": "null",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 443,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452
  },
  {
    "type": "JSXIdentifier",
    "value": "AddressComp",
    "start": 452,
    "end": 463
  },
  {
    "type": "JSXIdentifier",
    "value": "postalCode",
    "start": 464,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475
  },
  {
    "type": "JSXText",
    "value": "'T1B 0L3'",
    "start": 475,
    "end": 484
  },
  {
    "type": "JSXIdentifier",
    "value": "street",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "JSXText",
    "value": "\"vancouver\"",
    "start": 492,
    "end": 503
  },
  {
    "type": "JSXIdentifier",
    "value": "country",
    "start": 504,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512
  },
  {
    "type": "JSXText",
    "value": "\"CA\"",
    "start": 512,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 518,
    "end": 519
  }
]
```
