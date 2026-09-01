__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 23
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "CompileDiagnostic",
                "raw": "\"CompileDiagnostic\"",
                "start": 26,
                "end": 45
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 19,
              "end": 46
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 125
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
                    "name": "position",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 134
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "position",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 154
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 164,
                                  "end": 168
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "position",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 169,
                                  "end": 177
                                },
                                "optional": false,
                                "computed": false,
                                "start": 164,
                                "end": 177
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "position",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 180,
                                "end": 188
                              },
                              "start": 164,
                              "end": 188
                            },
                            "directive": null,
                            "start": 164,
                            "end": 189
                          }
                        ],
                        "start": 156,
                        "end": 195
                      },
                      "alternate": null,
                      "start": 142,
                      "end": 195
                    }
                  ],
                  "start": 136,
                  "end": 199
                },
                "expression": false,
                "start": 125,
                "end": 199
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 114,
              "end": 199
            }
          ],
          "start": 15,
          "end": 201
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 201
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 201
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
            "start": 206,
            "end": 207
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 217,
                    "end": 218
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 220,
                    "end": 221
                  }
                ],
                "start": 216,
                "end": 222
              }
            ],
            "start": 210,
            "end": 223
          },
          "definite": false,
          "start": 206,
          "end": 223
        }
      ],
      "declare": false,
      "start": 202,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 226
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "position",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 235
        },
        "optional": false,
        "computed": false,
        "start": 225,
        "end": 235
      },
      "directive": null,
      "start": 225,
      "end": 236
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 236
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"CompileDiagnostic\"",
    "start": 26,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 114,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 126,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 146,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 169,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 180,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 210,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 221,
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
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 227,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  }
]
```
