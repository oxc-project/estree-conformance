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
        "name": "Stuff",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
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
              "start": 56,
              "end": 57
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 56,
            "end": 57
          }
        ],
        "start": 55,
        "end": 58
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "typeArguments": null,
          "start": 65,
          "end": 66
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 84
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 102
              },
              "start": 81,
              "end": 102
            },
            "typeArguments": null,
            "start": 81,
            "end": 102
          },
          "start": 75,
          "end": 102
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 116
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 134
              },
              "start": 113,
              "end": 134
            },
            "typeArguments": null,
            "start": 113,
            "end": 134
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "typeArguments": null,
            "start": 135,
            "end": 136
          },
          "start": 113,
          "end": 137
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 148,
          "end": 151
        },
        "start": 65,
        "end": 151
      },
      "declare": false,
      "start": 45,
      "end": 152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 164
      },
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
              "start": 165,
              "end": 166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 166
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 169
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 168,
            "end": 169
          }
        ],
        "start": 164,
        "end": 170
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stuff",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 180
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
                      "start": 181,
                      "end": 182
                    },
                    "typeArguments": null,
                    "start": 181,
                    "end": 182
                  }
                ],
                "start": 180,
                "end": 183
              },
              "start": 175,
              "end": 183
            },
            "start": 173,
            "end": 183
          },
          "start": 171,
          "end": 183
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stuff",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 194
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 196
                    },
                    "typeArguments": null,
                    "start": 195,
                    "end": 196
                  }
                ],
                "start": 194,
                "end": 197
              },
              "start": 189,
              "end": 197
            },
            "start": 187,
            "end": 197
          },
          "start": 185,
          "end": 197
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 207
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 212
              },
              "start": 205,
              "end": 212
            },
            "directive": null,
            "start": 205,
            "end": 213
          }
        ],
        "start": 199,
        "end": 224
      },
      "expression": false,
      "start": 154,
      "end": 224
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 224
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 45,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 67,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 85,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 117,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 154,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 189,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 205,
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
    "value": "p2",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  }
]
```
