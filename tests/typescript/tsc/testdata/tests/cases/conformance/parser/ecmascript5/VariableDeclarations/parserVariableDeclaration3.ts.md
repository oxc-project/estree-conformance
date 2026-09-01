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
        "name": "runTests",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 17
      },
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "outfile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 37
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Harness",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 44,
                        "end": 51
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Compiler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 52,
                        "end": 60
                      },
                      "optional": false,
                      "computed": false,
                      "start": 44,
                      "end": 60
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WriterAggregator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 77
                    },
                    "optional": false,
                    "computed": false,
                    "start": 44,
                    "end": 77
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 40,
                  "end": 79
                },
                "definite": false,
                "start": 30,
                "end": 79
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "outerr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 94
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Harness",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 108
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Compiler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 117
                      },
                      "optional": false,
                      "computed": false,
                      "start": 101,
                      "end": 117
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WriterAggregator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 134
                    },
                    "optional": false,
                    "computed": false,
                    "start": 101,
                    "end": 134
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 97,
                  "end": 136
                },
                "definite": false,
                "start": 88,
                "end": 136
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "compiler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 153
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeScript",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 167
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeScriptCompiler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 186
                      },
                      "start": 157,
                      "end": 186
                    },
                    "typeArguments": null,
                    "start": 157,
                    "end": 186
                  },
                  "expression": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeScript",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 201
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeScriptCompiler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 202,
                        "end": 220
                      },
                      "optional": false,
                      "computed": false,
                      "start": 191,
                      "end": 220
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outerr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 227
                      }
                    ],
                    "start": 187,
                    "end": 228
                  },
                  "start": 156,
                  "end": 228
                },
                "definite": false,
                "start": 145,
                "end": 228
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "code",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 241
                },
                "init": null,
                "definite": false,
                "start": 237,
                "end": 241
              }
            ],
            "declare": false,
            "start": 26,
            "end": 242
          }
        ],
        "start": 20,
        "end": 244
      },
      "expression": false,
      "start": 0,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 244
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
    "value": "runTests",
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
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "outfile",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 40,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Harness",
    "start": 44,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Compiler",
    "start": 52,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "WriterAggregator",
    "start": 61,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "outerr",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Harness",
    "start": 101,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Compiler",
    "start": 109,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "WriterAggregator",
    "start": 118,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "compiler",
    "start": 145,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 157,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "TypeScriptCompiler",
    "start": 168,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 191,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "TypeScriptCompiler",
    "start": 202,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "outerr",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  }
]
```
