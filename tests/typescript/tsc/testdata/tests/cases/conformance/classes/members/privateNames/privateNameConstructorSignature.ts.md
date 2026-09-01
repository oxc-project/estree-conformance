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
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          }
        ],
        "start": 12,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 38
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
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 45,
              "end": 47
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 45,
            "end": 48
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 64
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 81,
                            "end": 82
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 77,
                          "end": 84
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "x",
                          "start": 85,
                          "end": 87
                        },
                        "optional": false,
                        "computed": false,
                        "start": 77,
                        "end": 87
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 90,
                        "end": 92
                      },
                      "start": 77,
                      "end": 92
                    },
                    "directive": null,
                    "start": 77,
                    "end": 93
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 109
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 116,
                            "end": 117
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 112,
                          "end": 119
                        },
                        "definite": false,
                        "start": 108,
                        "end": 119
                      }
                    ],
                    "declare": false,
                    "start": 102,
                    "end": 120
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 135,
                          "end": 136
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 143,
                            "end": 144
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 139,
                          "end": 146
                        },
                        "definite": false,
                        "start": 135,
                        "end": 146
                      }
                    ],
                    "declare": false,
                    "start": 129,
                    "end": 147
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 157
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 158,
                          "end": 159
                        },
                        "optional": false,
                        "computed": false,
                        "start": 156,
                        "end": 159
                      },
                      "right": {
                        "type": "Literal",
                        "value": 123,
                        "raw": "123",
                        "start": 162,
                        "end": 165
                      },
                      "start": 156,
                      "end": 165
                    },
                    "directive": null,
                    "start": 156,
                    "end": 166
                  }
                ],
                "start": 67,
                "end": 172
              },
              "expression": false,
              "start": 64,
              "end": 172
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 53,
            "end": 172
          }
        ],
        "start": 39,
        "end": 174
      },
      "abstract": false,
      "declare": false,
      "start": 31,
      "end": 174
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 186
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 202
                },
                "typeArguments": null,
                "start": 201,
                "end": 202
              },
              "start": 199,
              "end": 202
            },
            "start": 193,
            "end": 203
          }
        ],
        "start": 187,
        "end": 205
      },
      "declare": false,
      "start": 175,
      "end": 205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 206
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
    "value": "D",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 53,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 77,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 129,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 175,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Keyword",
    "value": "new",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  }
]
```
