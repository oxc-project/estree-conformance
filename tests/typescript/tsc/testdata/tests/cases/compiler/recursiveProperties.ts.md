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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 26
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 38,
                        "end": 42
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "testProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 43,
                        "end": 51
                      },
                      "optional": false,
                      "computed": false,
                      "start": 38,
                      "end": 51
                    },
                    "start": 31,
                    "end": 52
                  }
                ],
                "start": 29,
                "end": 54
              },
              "expression": false,
              "start": 26,
              "end": 54
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 54
          }
        ],
        "start": 8,
        "end": 56
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 65
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
              "name": "testProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 84
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 91,
                      "end": 97
                    },
                    "start": 90,
                    "end": 97
                  },
                  "start": 85,
                  "end": 97
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "testProp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 106,
                          "end": 114
                        },
                        "optional": false,
                        "computed": false,
                        "start": 101,
                        "end": 114
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 117,
                        "end": 122
                      },
                      "start": 101,
                      "end": 122
                    },
                    "directive": null,
                    "start": 101,
                    "end": 123
                  }
                ],
                "start": 99,
                "end": 125
              },
              "expression": false,
              "start": 84,
              "end": 125
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 72,
            "end": 125
          }
        ],
        "start": 66,
        "end": 127
      },
      "abstract": false,
      "declare": false,
      "start": 58,
      "end": 127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 127
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
    "type": "Identifier",
    "value": "get",
    "start": 14,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "testProp",
    "start": 18,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 31,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "testProp",
    "start": 43,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 72,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "testProp",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 91,
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
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "testProp",
    "start": 106,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  }
]
```
