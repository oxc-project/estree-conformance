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
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 21
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 55
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 59
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 55,
              "end": 61
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 28,
            "end": 61
          }
        ],
        "start": 22,
        "end": 63
      },
      "abstract": true,
      "declare": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 76
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 91
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
              "name": "_x",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 100
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 102,
                "end": 105
              },
              "start": 100,
              "end": 105
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 98,
            "end": 106
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 129
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 133
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
                          "start": 145,
                          "end": 149
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 152
                        },
                        "optional": false,
                        "computed": false,
                        "start": 145,
                        "end": 152
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 155,
                        "end": 158
                      },
                      "start": 145,
                      "end": 158
                    },
                    "directive": null,
                    "start": 145,
                    "end": 159
                  }
                ],
                "start": 135,
                "end": 165
              },
              "expression": false,
              "start": 129,
              "end": 165
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 111,
            "end": 165
          }
        ],
        "start": 92,
        "end": 167
      },
      "abstract": false,
      "declare": false,
      "start": 65,
      "end": 167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 0,
    "end": 8
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Parent",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 28,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 35,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 48,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 71,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 77,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Parent",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 111,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 118,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 130,
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
    "type": "Keyword",
    "value": "this",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  }
]
```
