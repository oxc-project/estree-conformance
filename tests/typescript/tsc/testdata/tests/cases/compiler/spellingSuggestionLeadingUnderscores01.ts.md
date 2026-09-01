__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "__foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 53
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 55,
                            "end": 57
                          },
                          "start": 55,
                          "end": 57
                        },
                        "start": 53,
                        "end": 57
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 48,
                      "end": 58
                    }
                  ],
                  "start": 42,
                  "end": 60
                },
                "start": 40,
                "end": 60
              },
              "start": 39,
              "end": 60
            },
            "init": null,
            "definite": false,
            "start": 39,
            "end": 60
          }
        ],
        "declare": true,
        "start": 27,
        "end": 60
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 20,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 63
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "___foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 70
        },
        "optional": false,
        "computed": false,
        "start": 62,
        "end": 70
      },
      "directive": null,
      "start": 62,
      "end": 70
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "__foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 112,
                        "end": 117
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 119,
                          "end": 125
                        },
                        "start": 117,
                        "end": 125
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 112,
                      "end": 125
                    }
                  ],
                  "start": 106,
                  "end": 127
                },
                "start": 104,
                "end": 127
              },
              "start": 103,
              "end": 127
            },
            "init": null,
            "definite": false,
            "start": 103,
            "end": 127
          }
        ],
        "declare": false,
        "start": 99,
        "end": 127
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 92,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 130
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "___foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 145
              },
              "value": {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 147,
                "end": 150
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 139,
              "end": 150
            }
          ],
          "start": 133,
          "end": 153
        },
        "start": 129,
        "end": 153
      },
      "directive": null,
      "start": 129,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 154
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 27,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
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
    "value": "__foo",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "___foo",
    "start": 64,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 92,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "__foo",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "___foo",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  }
]
```
