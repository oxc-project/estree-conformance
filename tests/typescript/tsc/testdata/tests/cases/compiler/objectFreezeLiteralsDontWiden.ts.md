__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "PUPPETEER_REVISIONS",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 25
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 34
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 41
              },
              "optional": false,
              "computed": false,
              "start": 28,
              "end": 41
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "chromium",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 46,
                      "end": 54
                    },
                    "value": {
                      "type": "Literal",
                      "value": "1011831",
                      "raw": "'1011831'",
                      "start": 56,
                      "end": 65
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 46,
                    "end": 65
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "firefox",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 76
                    },
                    "value": {
                      "type": "Literal",
                      "value": "latest",
                      "raw": "'latest'",
                      "start": 78,
                      "end": 86
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 69,
                    "end": 86
                  }
                ],
                "start": 42,
                "end": 89
              }
            ],
            "optional": false,
            "start": 28,
            "end": 90
          },
          "definite": false,
          "start": 6,
          "end": 90
        }
      ],
      "declare": false,
      "start": 0,
      "end": 91
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
            "name": "preferredRevision",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 114
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "PUPPETEER_REVISIONS",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 136
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "chromium",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 145
            },
            "optional": false,
            "computed": false,
            "start": 117,
            "end": 145
          },
          "definite": false,
          "start": 97,
          "end": 145
        }
      ],
      "declare": false,
      "start": 93,
      "end": 146
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "preferredRevision",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 164
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "PUPPETEER_REVISIONS",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 186
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "firefox",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 194
          },
          "optional": false,
          "computed": false,
          "start": 167,
          "end": 194
        },
        "start": 147,
        "end": 194
      },
      "directive": null,
      "start": 147,
      "end": 195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 195
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "PUPPETEER_REVISIONS",
    "start": 6,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "freeze",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "chromium",
    "start": 46,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "String",
    "value": "'1011831'",
    "start": 56,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "firefox",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "String",
    "value": "'latest'",
    "start": 78,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 93,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "preferredRevision",
    "start": 97,
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
    "value": "PUPPETEER_REVISIONS",
    "start": 117,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "chromium",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "preferredRevision",
    "start": 147,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "PUPPETEER_REVISIONS",
    "start": 167,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "firefox",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  }
]
```
