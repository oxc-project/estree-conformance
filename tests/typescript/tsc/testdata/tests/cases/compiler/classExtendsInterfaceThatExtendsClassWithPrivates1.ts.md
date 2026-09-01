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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 24
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 28,
                      "end": 31
                    },
                    "start": 26,
                    "end": 31
                  },
                  "start": 25,
                  "end": 31
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 43
                    },
                    "start": 35,
                    "end": 44
                  }
                ],
                "start": 33,
                "end": 46
              },
              "expression": false,
              "start": 24,
              "end": 46
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 14,
            "end": 46
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 63,
              "end": 64
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 51,
            "end": 65
          }
        ],
        "start": 8,
        "end": 67
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 80
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 90
          },
          "typeArguments": null,
          "start": 89,
          "end": 90
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
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 102
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 106,
                    "end": 109
                  },
                  "start": 104,
                  "end": 109
                },
                "start": 103,
                "end": 109
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 112,
                "end": 115
              },
              "start": 110,
              "end": 115
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 97,
            "end": 116
          }
        ],
        "start": 91,
        "end": 118
      },
      "declare": false,
      "start": 69,
      "end": 118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 128
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 141
          },
          "typeArguments": null,
          "start": 140,
          "end": 141
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 158
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 162,
                      "end": 165
                    },
                    "start": 160,
                    "end": 165
                  },
                  "start": 159,
                  "end": 165
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 177
                    },
                    "start": 169,
                    "end": 177
                  }
                ],
                "start": 167,
                "end": 179
              },
              "expression": false,
              "start": 158,
              "end": 179
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 148,
            "end": 179
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 196,
              "end": 197
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 184,
            "end": 198
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 208
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 212,
                      "end": 215
                    },
                    "start": 210,
                    "end": 215
                  },
                  "start": 209,
                  "end": 215
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 227
                    },
                    "start": 219,
                    "end": 227
                  }
                ],
                "start": 217,
                "end": 229
              },
              "expression": false,
              "start": 208,
              "end": 229
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 203,
            "end": 229
          }
        ],
        "start": 142,
        "end": 231
      },
      "abstract": false,
      "declare": false,
      "start": 120,
      "end": 231
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 232
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
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 51,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 69,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 81,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 126,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 129,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 148,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 169,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 184,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Identifier",
    "value": "other",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 219,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  }
]
```
