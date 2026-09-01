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
        "name": "A",
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "myField",
              "start": 21,
              "end": 29
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "hello world",
              "raw": "\"hello world\"",
              "start": 32,
              "end": 45
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
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
              "start": 51,
              "end": 62
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 75,
                          "end": 82
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 83,
                          "end": 86
                        },
                        "optional": false,
                        "computed": false,
                        "start": 75,
                        "end": 86
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 87,
                            "end": 88
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "myField",
                            "start": 89,
                            "end": 97
                          },
                          "optional": false,
                          "computed": false,
                          "start": 87,
                          "end": 97
                        }
                      ],
                      "optional": false,
                      "start": 75,
                      "end": 98
                    },
                    "directive": null,
                    "start": 75,
                    "end": 99
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 120
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 124
                        },
                        "optional": false,
                        "computed": false,
                        "start": 113,
                        "end": 124
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 125,
                            "end": 129
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "myField",
                            "start": 130,
                            "end": 138
                          },
                          "optional": false,
                          "computed": false,
                          "start": 125,
                          "end": 138
                        }
                      ],
                      "optional": false,
                      "start": 113,
                      "end": 139
                    },
                    "directive": null,
                    "start": 113,
                    "end": 140
                  }
                ],
                "start": 65,
                "end": 154
              },
              "expression": false,
              "start": 62,
              "end": 154
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 51,
            "end": 154
          }
        ],
        "start": 8,
        "end": 156
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 156
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 156
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
    "value": "A",
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
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "PrivateIdentifier",
    "value": "myField",
    "start": 21,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"hello world\"",
    "start": 32,
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
    "start": 51,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89
  },
  {
    "type": "PrivateIdentifier",
    "value": "myField",
    "start": 89,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 113,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "PrivateIdentifier",
    "value": "myField",
    "start": 130,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  }
]
```
