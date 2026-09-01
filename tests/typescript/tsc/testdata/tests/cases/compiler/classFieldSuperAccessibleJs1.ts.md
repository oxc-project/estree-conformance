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
        "name": "C",
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
              "type": "Identifier",
              "decorators": [],
              "name": "blah1",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 24
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 27,
              "end": 30
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 12,
            "end": 31
          }
        ],
        "start": 8,
        "end": 33
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 33
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "blah2",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 41
          },
          "optional": false,
          "computed": false,
          "start": 34,
          "end": 41
        },
        "right": {
          "type": "Literal",
          "value": 456,
          "raw": "456",
          "start": 44,
          "end": 47
        },
        "start": 34,
        "end": 47
      },
      "directive": null,
      "start": 34,
      "end": 48
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 57
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 67
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
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
                      "start": 85,
                      "end": 92
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 96
                    },
                    "optional": false,
                    "computed": false,
                    "start": 85,
                    "end": 96
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 97,
                        "end": 102
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "blah1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 108
                      },
                      "optional": false,
                      "computed": false,
                      "start": 97,
                      "end": 108
                    }
                  ],
                  "optional": false,
                  "start": 85,
                  "end": 109
                },
                "directive": null,
                "start": 85,
                "end": 110
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
                      "start": 115,
                      "end": 122
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 126
                    },
                    "optional": false,
                    "computed": false,
                    "start": 115,
                    "end": 126
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 127,
                        "end": 132
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "blah2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 138
                      },
                      "optional": false,
                      "computed": false,
                      "start": 127,
                      "end": 138
                    }
                  ],
                  "optional": false,
                  "start": 115,
                  "end": 139
                },
                "directive": null,
                "start": 115,
                "end": 140
              }
            ],
            "start": 72,
            "end": 144
          }
        ],
        "start": 68,
        "end": 146
      },
      "abstract": false,
      "declare": false,
      "start": 50,
      "end": 146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 146
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
    "value": "C",
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
    "start": 12,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "blah1",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "blah2",
    "start": 36,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Numeric",
    "value": "456",
    "start": 44,
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
    "value": "class",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 58,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "blah1",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "blah2",
    "start": 133,
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
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  }
]
```
