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
        "name": "base",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 35
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
              "start": 36,
              "end": 37
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 36,
            "end": 37
          }
        ],
        "start": 35,
        "end": 38
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
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
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 79
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 82
                      },
                      "typeArguments": null,
                      "start": 81,
                      "end": 82
                    },
                    "start": 79,
                    "end": 82
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 68,
                  "end": 83
                }
              ],
              "start": 58,
              "end": 89
            },
            "abstract": false,
            "declare": false,
            "start": 47,
            "end": 89
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 105
            },
            "start": 94,
            "end": 106
          }
        ],
        "start": 41,
        "end": 108
      },
      "expression": false,
      "start": 22,
      "end": 108
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 119
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
              "start": 120,
              "end": 121
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 120,
            "end": 121
          }
        ],
        "start": 119,
        "end": 122
      },
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null,
          "start": 131,
          "end": 135
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
                "start": 136,
                "end": 137
              },
              "typeArguments": null,
              "start": 136,
              "end": 137
            }
          ],
          "start": 135,
          "end": 138
        },
        "arguments": [],
        "optional": false,
        "start": 131,
        "end": 140
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 141,
        "end": 143
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 143
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Spec",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 180
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 192
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 193,
            "end": 199
          }
        ],
        "start": 192,
        "end": 200
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 201,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 170,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 206,
          "end": 212
        },
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Spec",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 217
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 222
          },
          "optional": false,
          "computed": false,
          "start": 213,
          "end": 222
        },
        "start": 205,
        "end": 222
      },
      "directive": null,
      "start": 205,
      "end": 223
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 223
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 22,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 53,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 68,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 94,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Gen",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 123,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 170,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "Spec",
    "start": 176,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 181,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "Gen",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "Spec",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  }
]
```
