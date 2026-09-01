__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 9,
        "end": 14
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 19
              },
              "typeArguments": null,
              "start": 18,
              "end": 19
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 22
              },
              "typeArguments": null,
              "start": 21,
              "end": 22
            }
          ],
          "start": 17,
          "end": 23
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSUnknownKeyword",
              "start": 32,
              "end": 39
            },
            "start": 32,
            "end": 41
          },
          "start": 32,
          "end": 43
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 50
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 53
                    },
                    "typeArguments": null,
                    "start": 52,
                    "end": 53
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 55,
                      "end": 56
                    },
                    "typeArguments": null,
                    "start": 55,
                    "end": 56
                  }
                ],
                "start": 51,
                "end": 57
              }
            ],
            "start": 50,
            "end": 58
          },
          "start": 46,
          "end": 58
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "else",
            "raw": "'else'",
            "start": 61,
            "end": 67
          },
          "start": 61,
          "end": 67
        },
        "start": 17,
        "end": 67
      },
      "declare": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 77
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
              "start": 78,
              "end": 79
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 88,
                  "end": 95
                },
                "start": 88,
                "end": 97
              },
              "start": 88,
              "end": 99
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 78,
            "end": 99
          }
        ],
        "start": 77,
        "end": 100
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "typeArguments": null,
        "start": 103,
        "end": 104
      },
      "declare": false,
      "start": 68,
      "end": 104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 115
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
              "start": 116,
              "end": 117
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 116,
            "end": 117
          }
        ],
        "start": 115,
        "end": 118
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Set",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 124
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 126
                },
                "typeArguments": null,
                "start": 125,
                "end": 126
              }
            ],
            "start": 124,
            "end": 127
          },
          "start": 121,
          "end": 127
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Set",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 139
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 140,
                  "end": 147
                },
                "start": 140,
                "end": 149
              }
            ],
            "start": 139,
            "end": 150
          },
          "start": 136,
          "end": 150
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 157
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 161
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 163
                      },
                      "typeArguments": null,
                      "start": 162,
                      "end": 163
                    }
                  ],
                  "start": 161,
                  "end": 164
                },
                "start": 158,
                "end": 164
              }
            ],
            "start": 157,
            "end": 165
          },
          "start": 153,
          "end": 165
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "else",
            "raw": "'else'",
            "start": 168,
            "end": 174
          },
          "start": 168,
          "end": 174
        },
        "start": 121,
        "end": 174
      },
      "declare": false,
      "start": 106,
      "end": 174
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 184
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
              "start": 185,
              "end": 186
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 198
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnknownKeyword",
                      "start": 199,
                      "end": 206
                    },
                    "start": 199,
                    "end": 208
                  }
                ],
                "start": 198,
                "end": 209
              },
              "start": 195,
              "end": 209
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 209
          }
        ],
        "start": 184,
        "end": 210
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 214
        },
        "typeArguments": null,
        "start": 213,
        "end": 214
      },
      "declare": false,
      "start": 175,
      "end": 214
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 214
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 24,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 32,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Bar1",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "String",
    "value": "'else'",
    "start": 61,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 68,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Bar1",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 80,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 106,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 128,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "String",
    "value": "'else'",
    "start": 168,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 175,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 187,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 199,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 213,
    "end": 214
  }
]
```
