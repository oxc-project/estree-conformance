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
        "name": "repeat",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 72
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 104
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "times",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 134
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 153
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "times",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 159
                        }
                      ],
                      "optional": false,
                      "start": 148,
                      "end": 160
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 165
                    },
                    "optional": false,
                    "computed": false,
                    "start": 148,
                    "end": 165
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 173
                    }
                  ],
                  "optional": false,
                  "start": 148,
                  "end": 174
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "join",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 179
                },
                "optional": false,
                "computed": false,
                "start": 148,
                "end": 179
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " ",
                        "cooked": " "
                      },
                      "tail": true,
                      "start": 180,
                      "end": 183
                    }
                  ],
                  "expressions": [],
                  "start": 180,
                  "end": 183
                }
              ],
              "optional": false,
              "start": 148,
              "end": 184
            },
            "start": 141,
            "end": 185
          }
        ],
        "start": 138,
        "end": 187
      },
      "expression": false,
      "start": 57,
      "end": 187
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
            "name": "message",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 246
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "hello",
                  "cooked": "hello"
                },
                "tail": true,
                "start": 249,
                "end": 256
              }
            ],
            "expressions": [],
            "start": 249,
            "end": 256
          },
          "definite": false,
          "start": 239,
          "end": 256
        }
      ],
      "declare": false,
      "start": 233,
      "end": 257
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
            "name": "times",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 314
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 317,
            "end": 318
          },
          "definite": false,
          "start": 309,
          "end": 318
        }
      ],
      "declare": false,
      "start": 303,
      "end": 319
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 319
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 57,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "repeat",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 97,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 129,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 141,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "fill",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 166,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Template",
    "value": "` `",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 233,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 239,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "Template",
    "value": "`hello`",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 303,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 309,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  }
]
```
