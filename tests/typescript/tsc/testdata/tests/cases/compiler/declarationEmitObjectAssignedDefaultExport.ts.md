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
        "name": "Statics",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
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
              "type": "Literal",
              "value": "$$whatever",
              "raw": "\"$$whatever\"",
              "start": 24,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 45
          }
        ],
        "start": 18,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hoistNonReactStatics",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 86
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NonReactStatics",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 113
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
                    "start": 114,
                    "end": 115
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 114,
                  "end": 115
                }
              ],
              "start": 113,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 133
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 140,
                          "end": 141
                        },
                        "typeArguments": null,
                        "start": 140,
                        "end": 141
                      },
                      "start": 134,
                      "end": 141
                    },
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Statics",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 156
                        },
                        "typeArguments": null,
                        "start": 149,
                        "end": 156
                      },
                      "start": 143,
                      "end": 156
                    }
                  ],
                  "start": 133,
                  "end": 157
                },
                "start": 126,
                "end": 157
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
                  },
                  "typeArguments": null,
                  "start": 160,
                  "end": 161
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 163
                  },
                  "typeArguments": null,
                  "start": 162,
                  "end": 163
                },
                "start": 160,
                "end": 164
              },
              "optional": false,
              "readonly": null,
              "start": 119,
              "end": 165
            },
            "declare": false,
            "start": 93,
            "end": 165
          }
        ],
        "start": 87,
        "end": 167
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 48,
      "end": 167
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "hoistNonReactStatics",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 197
      },
      "start": 168,
      "end": 198
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 198
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
    "value": "Statics",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"$$whatever\"",
    "start": 24,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 48,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 56,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "hoistNonReactStatics",
    "start": 66,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 93,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "NonReactStatics",
    "start": 98,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 123,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 126,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Statics",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "hoistNonReactStatics",
    "start": 177,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "hoistNonReactStatics",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 32
          },
          "start": 7,
          "end": 32
        }
      ],
      "source": {
        "type": "Literal",
        "value": "hoist-non-react-statics",
        "raw": "\"hoist-non-react-statics\"",
        "start": 38,
        "end": 63
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 64
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DefaultTheme",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 94
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 95,
          "end": 97
        },
        "declare": false,
        "start": 72,
        "end": 97
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 65,
      "end": 97
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 125
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 130
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 139,
                "end": 145
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 126,
              "end": 145
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTheme",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 153
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DefaultTheme",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 168
                },
                "typeArguments": null,
                "start": 156,
                "end": 168
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 147,
              "end": 168
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TStyle",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 176
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 179,
                "end": 181
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 170,
              "end": 181
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TWhatever",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 192
              },
              "constraint": null,
              "default": {
                "type": "TSNeverKeyword",
                "start": 195,
                "end": 200
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 183,
              "end": 200
            }
          ],
          "start": 125,
          "end": 201
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 208,
              "end": 214
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StyledComponentBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 240
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 241,
                      "end": 245
                    },
                    "typeArguments": null,
                    "start": 241,
                    "end": 245
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTheme",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 253
                    },
                    "typeArguments": null,
                    "start": 247,
                    "end": 253
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TStyle",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 261
                    },
                    "typeArguments": null,
                    "start": 255,
                    "end": 261
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TWhatever",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 272
                    },
                    "typeArguments": null,
                    "start": 263,
                    "end": 272
                  }
                ],
                "start": 240,
                "end": 273
              },
              "start": 221,
              "end": 273
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hoistNonReactStatics",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 300
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonReactStatics",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 316
                },
                "start": 280,
                "end": 316
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 321
                    },
                    "typeArguments": null,
                    "start": 317,
                    "end": 321
                  }
                ],
                "start": 316,
                "end": 322
              },
              "start": 280,
              "end": 322
            }
          ],
          "start": 208,
          "end": 322
        },
        "declare": false,
        "start": 105,
        "end": 323
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 98,
      "end": 323
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledComponentBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 360
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 365
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 374,
                "end": 380
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 361,
              "end": 380
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTheme",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 388
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DefaultTheme",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 403
                },
                "typeArguments": null,
                "start": 391,
                "end": 403
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 382,
              "end": 403
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TStyle",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 411
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 414,
                "end": 416
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 405,
              "end": 416
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TWhatever",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 427
              },
              "constraint": null,
              "default": {
                "type": "TSNeverKeyword",
                "start": 430,
                "end": 435
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 418,
              "end": 435
            }
          ],
          "start": 360,
          "end": 436
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
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 446
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 452
                  },
                  "typeArguments": null,
                  "start": 448,
                  "end": 452
                },
                "start": 446,
                "end": 452
              },
              "accessibility": null,
              "static": false,
              "start": 443,
              "end": 453
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "theme",
                "optional": false,
                "typeAnnotation": null,
                "start": 458,
                "end": 463
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TTheme",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 471
                  },
                  "typeArguments": null,
                  "start": 465,
                  "end": 471
                },
                "start": 463,
                "end": 471
              },
              "accessibility": null,
              "static": false,
              "start": 458,
              "end": 472
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "style",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 482
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TStyle",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 484,
                    "end": 490
                  },
                  "typeArguments": null,
                  "start": 484,
                  "end": 490
                },
                "start": 482,
                "end": 490
              },
              "accessibility": null,
              "static": false,
              "start": 477,
              "end": 491
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "whatever",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 504
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TWhatever",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 515
                  },
                  "typeArguments": null,
                  "start": 506,
                  "end": 515
                },
                "start": 504,
                "end": 515
              },
              "accessibility": null,
              "static": false,
              "start": 496,
              "end": 516
            }
          ],
          "start": 437,
          "end": 518
        },
        "declare": false,
        "start": 331,
        "end": 518
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 324,
      "end": 518
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 551
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
                "name": "div",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 561
              },
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
                            "name": "TemplateStringsArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 567,
                            "end": 587
                          },
                          "typeArguments": null,
                          "start": 567,
                          "end": 587
                        },
                        "start": 565,
                        "end": 587
                      },
                      "start": 564,
                      "end": 587
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StyledComponent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 607
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "div",
                              "raw": "\"div\"",
                              "start": 608,
                              "end": 613
                            },
                            "start": 608,
                            "end": 613
                          }
                        ],
                        "start": 607,
                        "end": 614
                      },
                      "start": 592,
                      "end": 614
                    },
                    "start": 589,
                    "end": 614
                  },
                  "start": 563,
                  "end": 614
                },
                "start": 561,
                "end": 614
              },
              "accessibility": null,
              "static": false,
              "start": 558,
              "end": 615
            }
          ],
          "start": 552,
          "end": 617
        },
        "declare": false,
        "start": 526,
        "end": 617
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 519,
      "end": 617
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
            "name": "styled",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 656
                },
                "typeArguments": null,
                "start": 641,
                "end": 656
              },
              "start": 639,
              "end": 656
            },
            "start": 633,
            "end": 656
          },
          "init": null,
          "definite": false,
          "start": 633,
          "end": 656
        }
      ],
      "declare": true,
      "start": 619,
      "end": 657
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "styled",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 679
      },
      "exportKind": "value",
      "start": 658,
      "end": 680
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 680
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "hoistNonReactStatics",
    "start": 12,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 33,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"hoist-non-react-statics\"",
    "start": 38,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 65,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 72,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "DefaultTheme",
    "start": 82,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 98,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 105,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "StyledComponent",
    "start": 110,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 126,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 131,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "TTheme",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "DefaultTheme",
    "start": 156,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "TStyle",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "TWhatever",
    "start": 183,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "StyledComponentBase",
    "start": 221,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "TTheme",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "TStyle",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "TWhatever",
    "start": 263,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "hoistNonReactStatics",
    "start": 280,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "NonReactStatics",
    "start": 301,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 324,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 331,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "StyledComponentBase",
    "start": 341,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 361,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 366,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "TTheme",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "DefaultTheme",
    "start": 391,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "TStyle",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "TWhatever",
    "start": 418,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 430,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 443,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 448,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "theme",
    "start": 458,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "TTheme",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 477,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "TStyle",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "whatever",
    "start": 496,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "TWhatever",
    "start": 506,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 519,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 526,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "StyledInterface",
    "start": 536,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 567,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 589,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "StyledComponent",
    "start": 592,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 607,
    "end": 608
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 619,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 627,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "styled",
    "start": 633,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "StyledInterface",
    "start": 641,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 658,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 665,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "styled",
    "start": 673,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "styled",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "styled-components",
        "raw": "\"styled-components\"",
        "start": 19,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "styled",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 57
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "div",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 51,
              "end": 61
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 61,
                  "end": 63
                }
              ],
              "expressions": [],
              "start": 61,
              "end": 63
            },
            "start": 51,
            "end": 63
          },
          "definite": false,
          "start": 47,
          "end": 63
        }
      ],
      "declare": false,
      "start": 41,
      "end": 64
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
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "styled",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 81
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "div",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 85
              },
              "optional": false,
              "computed": false,
              "start": 75,
              "end": 85
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 85,
                  "end": 87
                }
              ],
              "expressions": [],
              "start": 85,
              "end": 87
            },
            "start": 75,
            "end": 87
          },
          "definite": false,
          "start": 71,
          "end": 87
        }
      ],
      "declare": false,
      "start": 65,
      "end": 88
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
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "styled",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 112
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "div",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 116
                },
                "optional": false,
                "computed": false,
                "start": 106,
                "end": 116
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 116,
                    "end": 118
                  }
                ],
                "expressions": [],
                "start": 116,
                "end": 118
              },
              "start": 106,
              "end": 118
            },
            "definite": false,
            "start": 102,
            "end": 118
          }
        ],
        "declare": false,
        "start": 96,
        "end": 119
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 89,
      "end": 119
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 142
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "assign",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 149
          },
          "optional": false,
          "computed": false,
          "start": 136,
          "end": 149
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 160
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 160
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 159,
                "end": 160
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 166,
                "end": 167
              }
            ],
            "start": 153,
            "end": 169
          }
        ],
        "optional": false,
        "start": 136,
        "end": 170
      },
      "exportKind": "value",
      "start": 121,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "styled",
    "start": 7,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"styled-components\"",
    "start": 19,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "styled",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 58,
    "end": 61
  },
  {
    "type": "Template",
    "value": "``",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "styled",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 82,
    "end": 85
  },
  {
    "type": "Template",
    "value": "``",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 89,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "styled",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 113,
    "end": 116
  },
  {
    "type": "Template",
    "value": "``",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 128,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  }
]
```
