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
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 29
          }
        ],
        "start": 13,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 45
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 56
          },
          "typeArguments": null,
          "start": 54,
          "end": 56
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
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 65
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
              },
              "start": 65,
              "end": 73
            },
            "accessibility": null,
            "static": false,
            "start": 63,
            "end": 74
          }
        ],
        "start": 57,
        "end": 76
      },
      "declare": false,
      "start": 33,
      "end": 76
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 90
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 92,
                  "end": 94
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 88,
                "end": 94
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 98
                },
                "value": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 100,
                  "end": 102
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 96,
                "end": 102
              }
            ],
            "start": 86,
            "end": 104
          },
          "definite": false,
          "start": 82,
          "end": 104
        }
      ],
      "declare": false,
      "start": 78,
      "end": 105
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 113,
                    "end": 119
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 124
                    },
                    "typeArguments": null,
                    "start": 122,
                    "end": 124
                  }
                ],
                "start": 113,
                "end": 124
              },
              "start": 111,
              "end": 124
            },
            "start": 110,
            "end": 124
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 128
          },
          "definite": false,
          "start": 110,
          "end": 128
        }
      ],
      "declare": false,
      "start": 106,
      "end": 129
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 139
                },
                "typeArguments": null,
                "start": 137,
                "end": 139
              },
              "start": 135,
              "end": 139
            },
            "start": 134,
            "end": 139
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "definite": false,
          "start": 134,
          "end": 143
        }
      ],
      "declare": false,
      "start": 130,
      "end": 144
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 155,
                  "end": 161
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 164,
                    "end": 166
                  },
                  "typeArguments": null,
                  "start": 164,
                  "end": 166
                }
              ],
              "start": 155,
              "end": 166
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 168
            },
            "start": 154,
            "end": 168
          },
          "definite": false,
          "start": 150,
          "end": 168
        }
      ],
      "declare": false,
      "start": 146,
      "end": 169
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 175
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 179,
              "end": 185
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 187
            },
            "start": 178,
            "end": 187
          },
          "definite": false,
          "start": 174,
          "end": 187
        }
      ],
      "declare": false,
      "start": 170,
      "end": 188
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 200
              },
              "typeArguments": null,
              "start": 198,
              "end": 200
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 202
            },
            "start": 197,
            "end": 202
          },
          "definite": false,
          "start": 193,
          "end": 202
        }
      ],
      "declare": false,
      "start": 189,
      "end": 203
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 209
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 215
              },
              "typeArguments": null,
              "start": 213,
              "end": 215
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 217
            },
            "start": 212,
            "end": 217
          },
          "definite": false,
          "start": 208,
          "end": 217
        }
      ],
      "declare": false,
      "start": 204,
      "end": 218
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 218
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
    "value": "I1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 33,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 43,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 46,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "var",
    "start": 78,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "p1",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  }
]
```
