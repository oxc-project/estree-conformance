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
        "name": "MyInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 43
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
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
            },
            "accessibility": null,
            "static": false,
            "start": 48,
            "end": 66
          }
        ],
        "start": 44,
        "end": 68
      },
      "declare": false,
      "start": 22,
      "end": 68
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 83
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
              "start": 84,
              "end": 85
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 105
              },
              "typeArguments": null,
              "start": 94,
              "end": 105
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 105
          }
        ],
        "start": 83,
        "end": 106
      },
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
              "name": "doIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 115
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
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 130
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
                              "start": 131,
                              "end": 132
                            },
                            "typeArguments": null,
                            "start": 131,
                            "end": 132
                          }
                        ],
                        "start": 130,
                        "end": 133
                      },
                      "start": 123,
                      "end": 133
                    },
                    "start": 121,
                    "end": 133
                  },
                  "start": 116,
                  "end": 133
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 135,
                "end": 137
              },
              "expression": false,
              "start": 115,
              "end": 137
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 111,
            "end": 137
          }
        ],
        "start": 107,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 70,
      "end": 139
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MySubClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 157
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 173
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 185
            },
            "typeArguments": null,
            "start": 174,
            "end": 185
          }
        ],
        "start": 173,
        "end": 186
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 187,
        "end": 189
      },
      "abstract": false,
      "declare": false,
      "start": 141,
      "end": 189
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 202
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 222
              },
              "typeArguments": null,
              "start": 208,
              "end": 222
            },
            "start": 206,
            "end": 222
          },
          "start": 203,
          "end": 222
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 224,
        "end": 226
      },
      "expression": false,
      "start": 191,
      "end": 226
    },
    {
      "type": "EmptyStatement",
      "start": 226,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 231
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "MySubClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 242
          }
        ],
        "optional": false,
        "start": 229,
        "end": 243
      },
      "directive": null,
      "start": 229,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 244
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "MyInterface",
    "start": 32,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 48,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 76,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 86,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "MyInterface",
    "start": 94,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "doIt",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 141,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "MySubClass",
    "start": 147,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 158,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 166,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "MyInterface",
    "start": 174,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 191,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 208,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 215,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "MySubClass",
    "start": 232,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  }
]
```
