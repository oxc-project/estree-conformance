__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 44,
                        "end": 45
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 48,
                        "end": 49
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 44,
                      "end": 49
                    }
                  ],
                  "start": 42,
                  "end": 51
                },
                "abstract": false,
                "declare": false,
                "start": 36,
                "end": 51
              },
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 55
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 58,
                      "end": 59
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 54,
                    "end": 59
                  }
                ],
                "start": 52,
                "end": 61
              },
              "abstract": false,
              "declare": false,
              "start": 22,
              "end": 61
            },
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 68,
                    "end": 69
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 64,
                  "end": 69
                }
              ],
              "start": 62,
              "end": 71
            },
            "abstract": false,
            "declare": false,
            "start": 8,
            "end": 71
          },
          "definite": false,
          "start": 4,
          "end": 71
        }
      ],
      "declare": false,
      "start": 0,
      "end": 72
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 78
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "typeArguments": null,
            "arguments": [],
            "start": 81,
            "end": 88
          },
          "definite": false,
          "start": 77,
          "end": 88
        }
      ],
      "declare": false,
      "start": 73,
      "end": 89
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
          "start": 90,
          "end": 91
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 93
        },
        "optional": false,
        "computed": false,
        "start": 90,
        "end": 93
      },
      "directive": null,
      "start": 90,
      "end": 94
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
          "start": 95,
          "end": 96
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 98
        },
        "optional": false,
        "computed": false,
        "start": 95,
        "end": 98
      },
      "directive": null,
      "start": 95,
      "end": 99
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
          "start": 100,
          "end": 101
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 103
        },
        "optional": false,
        "computed": false,
        "start": 100,
        "end": 103
      },
      "directive": null,
      "start": 100,
      "end": 104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 22,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 28,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 36,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 73,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "c",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  }
]
```
