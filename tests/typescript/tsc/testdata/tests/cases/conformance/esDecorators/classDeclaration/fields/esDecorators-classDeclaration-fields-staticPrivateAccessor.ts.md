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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
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
        "start": 29,
        "end": 30
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 41
                },
                "start": 37,
                "end": 41
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "field1",
              "start": 58,
              "end": 65
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 68,
              "end": 69
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 37,
            "end": 70
          }
        ],
        "start": 31,
        "end": 72
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 72
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 78
          },
          "start": 74,
          "end": 78
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 86
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "field1",
              "start": 109,
              "end": 116
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 119,
              "end": 120
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 93,
            "end": 121
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 143,
                    "end": 147
                  },
                  "property": {
                    "type": "PrivateIdentifier",
                    "name": "field1",
                    "start": 148,
                    "end": 155
                  },
                  "optional": false,
                  "computed": false,
                  "start": 143,
                  "end": 155
                },
                "directive": null,
                "start": 143,
                "end": 156
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 165,
                      "end": 169
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "name": "field1",
                      "start": 170,
                      "end": 177
                    },
                    "optional": false,
                    "computed": false,
                    "start": 165,
                    "end": 177
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 180,
                    "end": 181
                  },
                  "start": 165,
                  "end": 181
                },
                "directive": null,
                "start": 165,
                "end": 182
              }
            ],
            "start": 126,
            "end": 188
          }
        ],
        "start": 87,
        "end": 190
      },
      "abstract": false,
      "declare": false,
      "start": 74,
      "end": 190
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 190
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 38,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 42,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 49,
    "end": 57
  },
  {
    "type": "PrivateIdentifier",
    "value": "field1",
    "start": 58,
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
    "value": "0",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 75,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 93,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 100,
    "end": 108
  },
  {
    "type": "PrivateIdentifier",
    "value": "field1",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148
  },
  {
    "type": "PrivateIdentifier",
    "value": "field1",
    "start": 148,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "PrivateIdentifier",
    "value": "field1",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  }
]
```
